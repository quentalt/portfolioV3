import { json } from '@sveltejs/kit';
import { getAllTags } from '$lib/server/api/projects';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    const tags = await getAllTags();
    return json({ tags });
}