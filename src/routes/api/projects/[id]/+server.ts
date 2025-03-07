import { json } from '@sveltejs/kit';
import { getProjectById, getRelatedProjects } from '$lib/server/api/projects';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params}) => {
    const id = +params.id;
    if (!id) return json({ error: 'Invalid project ID' }, { status: 400 });

    const project = await getProjectById(id);
    if (!project) return json({ error: 'Project not found' }, { status: 404 });

    const related = await getRelatedProjects(id);

    return json({ project, related });
}