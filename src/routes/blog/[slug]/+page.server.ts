import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {getBlogPost} from "$lib/server/api/blogs";

export const load: PageServerLoad = async ({ params }) => {
    const slug = params.slug;
    if (!slug) throw error(400, 'Invalid blog post slug');
    const blogPost = await getBlogPost(slug);
    if (!blogPost) throw error(404, 'Blog post not found');

  return {
    blogPost
  };
}