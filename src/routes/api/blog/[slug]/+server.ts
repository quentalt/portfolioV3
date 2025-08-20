import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {getBlogPost} from "$lib/server/api/blogs";

export const GET: RequestHandler = async ({ params }) => {
    const slug = params.slug;
    if (!slug) return json({ error: 'Invalid blog post slug' }, { status: 400 });

    const blogPost = await getBlogPost(slug);
    if (!blogPost) return json({ error: 'Blog post not found' }, { status: 404 });
    return json({ blogPost });
};