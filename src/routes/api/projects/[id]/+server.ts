import { json } from '@sveltejs/kit';
import { getProjectById, getRelatedProjects } from '$lib/server/api/projects';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, url }) => {
    const projectId = Number(params.id);
    const project = await getProjectById(projectId);

    if (!project) {
        return new Response('Project not found', { status: 404 });
    }

    if (url.searchParams.has('related')) {
        const relatedProjects = await getRelatedProjects(projectId);
        return json({ project, relatedProjects });
    }

    return json(project);
};

