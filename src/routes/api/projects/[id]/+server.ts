import { json } from '@sveltejs/kit';
import { getProjectById, updateProject, deleteProject, getRelatedProjects } from '$lib/server/api/projects';
import type { RequestHandler } from './$types';
import { projectSchema } from '$lib/schemas/project';

export const GET: RequestHandler = async ({ params, url }) => {
    const project = await getProjectById(params.id);

    if (!project) {
        return new Response('Project not found', { status: 404 });
    }

    if (url.searchParams.has('related')) {
        const relatedProjects = await getRelatedProjects(params.id);
        return json({ project, relatedProjects });
    }

    return json(project);
};

export const PATCH: RequestHandler = async ({ params, request }) => {
    const data = await request.json();

    try {
        const validatedData = projectSchema.partial().parse(data);
        const project = await updateProject(params.id, validatedData);
        return json(project);
    } catch (error) {
        return json({ error: 'Invalid project data' }, { status: 400 });
    }
};

export const DELETE: RequestHandler = async ({ params }) => {
    try {
        await deleteProject(params.id);
        return new Response(null, { status: 204 });
    } catch (error) {
        return json({ error: 'Failed to delete project' }, { status: 500 });
    }
};