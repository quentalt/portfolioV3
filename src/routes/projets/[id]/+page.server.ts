import { prisma } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const project = await prisma.project.findUnique({
    where: { id: params.id }
  });

  if (!project) {
    throw error(404, 'Projet non trouvé');
  }

  return { project };
};