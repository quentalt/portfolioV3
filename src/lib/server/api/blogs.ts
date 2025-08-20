import { prisma } from '../prisma';
import type {BlogPost} from '@prisma/client';


export interface GetBlogPostsOptions {
    take?: number;
    skip?: number;
    tag?: string;
    search?: string;
    orderBy?: 'asc' | 'desc';
}

export async function getBlogPosts(options: GetBlogPostsOptions = {}): Promise<BlogPost[]> {
    const { take = 10, skip = 0, tag, search, orderBy = 'desc' } = options;

    const whereClause: any = {};

    // Filtrer par tag si spécifié
    if (tag) {
        whereClause.tags = {
            has: tag
        };
    }

    // Filtrer par recherche si spécifiée
    if (search) {
        whereClause.OR = [
            { title: { contains: search, mode: 'insensitive' } },
            { excerpt: { contains: search, mode: 'insensitive' } },
            { content: { contains: search, mode: 'insensitive' } },
            { tags: { has: search } }
        ];
    }

    return await prisma.blogPost.findMany({
        where: whereClause,
        orderBy: {
            publishedAt: orderBy
        },
        take,
        skip,
        select: {
            id: true,
            title: true,
            slug: true,
            excerpt: true,
            content: true,
            publishedAt: true,
            tags: true,
            image_url: true
        }
    });
}

export async function getBlogPost(slug: string) : Promise<BlogPost | null> {
    return prisma.blogPost.findUnique({
        where: {slug},
        select: {
            id: true,
            title: true,
            slug: true,
            excerpt: true,
            content: true,
            publishedAt: true,
            tags: true,
            image_url: true
        }
    });
}

export async function getBlogPostsByTag(tag: string, options: { take?: number; skip?: number } = {}): Promise<BlogPost[]> {
    const { take = 10, skip = 0 } = options;

    return await prisma.blogPost.findMany({
        where: {
            tags: {
                has: tag
            }
        },
        orderBy: {
            publishedAt: 'desc'
        },
        take,
        skip,
        select: {
            id: true,
            title: true,
            slug: true,
            excerpt: true,
            content: true,
            publishedAt: true,
            tags: true,
            image_url: true
        }
    });
}

export async function getRelatedPosts(currentSlug: string, maxResults: number = 3): Promise<BlogPost[]> {
    // Récupérer le post actuel pour obtenir ses tags
    const currentPost = await prisma.blogPost.findUnique({
        where: { slug: currentSlug },
        select: { tags: true }
    });

    if (!currentPost) return [];

    return await prisma.blogPost.findMany({
        where: {
            AND: [
                {slug: {not: currentSlug}},
                {
                    tags: {
                        hasSome: currentPost.tags
                    }
                }
            ]
        },
        orderBy: {
            publishedAt: 'desc'
        },
        take: maxResults,
        select: {
            id: true,
            title: true,
            slug: true,
            excerpt: true,
            content: true,
            publishedAt: true,
            tags: true,
            image_url: true
        }
    });
}

export async function createBlogPost(data: Omit<BlogPost, 'id'>): Promise<BlogPost> {
    return await prisma.blogPost.create({
        data: {
            title: data.title,
            slug: data.slug,
            excerpt: data.excerpt,
            content: data.content,
            publishedAt: data.publishedAt,
            tags: data.tags,
            image_url: data.image_url
        }
    });
}

export async function updateBlogPost(id: number, data: Partial<Omit<BlogPost, 'id'>>): Promise<BlogPost | null> {
    try {
        return await prisma.blogPost.update({
            where: {id},
            data: {
                ...(data.title && {title: data.title}),
                ...(data.slug && {slug: data.slug}),
                ...(data.excerpt && {excerpt: data.excerpt}),
                ...(data.content && {content: data.content}),
                ...(data.publishedAt && {publishedAt: data.publishedAt}),
                ...(data.tags && {tags: data.tags}),
                ...(data.image_url && {image_url: data.image_url})
            }
        });
    } catch (error) {
        console.error('Error updating blog post:', error);
        return null;
    }
}

export async function deleteBlogPost(id: number): Promise<boolean> {
    try {
        await prisma.blogPost.delete({
            where: { id }
        });
        return true;
    } catch (error) {
        console.error('Error deleting blog post:', error);
        return false;
    }
}

export async function getBlogPostsCount(options: { tag?: string; search?: string } = {}): Promise<number> {
    const { tag, search } = options;

    const whereClause: any = {};

    if (tag) {
        whereClause.tags = {
            has: tag
        };
    }

    if (search) {
        whereClause.OR = [
            { title: { contains: search, mode: 'insensitive' } },
            { excerpt: { contains: search, mode: 'insensitive' } },
            { content: { contains: search, mode: 'insensitive' } },
            { tags: { has: search } }
        ];
    }

    return await prisma.blogPost.count({
        where: whereClause
    });
}

export async function getAllTags(): Promise<string[]> {
    const posts = await prisma.blogPost.findMany({
        select: {
            tags: true
        }
    });

    const allTags = posts.flatMap(post => post.tags);
    const uniqueTags = [...new Set(allTags)];

    return uniqueTags.sort();
}