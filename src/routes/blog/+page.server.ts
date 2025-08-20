import type { PageServerLoad } from './$types';
import { getBlogPosts } from '$lib/server/api/blogs';

export const load: PageServerLoad = async () => {
    try {
        const posts = await getBlogPosts({
            take: 10, // Limite le nombre de posts à 10
            skip: 0, // Pas de saut de posts
            orderBy: 'desc'
        });

        return {
            posts: posts.map(post => ({
                id: post.id,
                title: post.title,
                slug: post.slug,
                excerpt: post.excerpt,
                image_url: post.image_url,
                publishedAt: post.publishedAt?.toISOString(), // Sérialiser la date
                tags: post.tags
            }))
        };
    } catch (error) {
        console.error('Erreur lors du chargement des posts:', error);
        return {
            posts: []
        };
    }
};