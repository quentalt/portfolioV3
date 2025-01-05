import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const tags = await prisma.project.findMany({
    select: { tags: true }
  });

  const uniqueTags = [...new Set(tags.flatMap(p => p.tags))];

  return {
    projects,
    tags: uniqueTags
  };
};