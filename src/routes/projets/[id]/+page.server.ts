import { getProjectById, getRelatedProjects } from '$lib/server/api/projects';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const id = +params.id;
  if (!id) throw error(400, 'Invalid project ID');

  const project = await getProjectById(id);
  if (!project) throw error(404, 'Project not found');

  const relatedProjects = await getRelatedProjects(id);

  return {
    project,
    relatedProjects
  };
};