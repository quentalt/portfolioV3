import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
    take: 6
  });

  return {
    projects
  };
};