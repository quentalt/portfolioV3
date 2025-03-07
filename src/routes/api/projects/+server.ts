import { json } from '@sveltejs/kit';
import { getProjects } from '$lib/server/api/projects';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    const searchParams = new URL(url).searchParams;
    const take = parseInt(searchParams.get('take') || '10');
    const skip = parseInt(searchParams.get('skip') || '0');
    const tag = searchParams.get('tag') || undefined;
    const search = searchParams.get('search') || undefined;
    const orderBy = (searchParams.get('orderBy') as 'asc' | 'desc') || 'desc';

    const result = await getProjects({ take, skip, tag, search, orderBy });
    return json(result);
};

