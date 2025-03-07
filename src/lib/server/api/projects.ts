import { prisma } from '../prisma';
import type { Project } from '@prisma/client';

export async function getProjects(options?: {
    skip?: number;
    take?: number;
    orderBy?: { [key: string]: 'asc' | 'desc' };
}): Promise<Project[]> {
    return prisma.project.findMany({
        ...options,
    });
}

export async function getProjectById(id: number): Promise<Project | null> {
    return prisma.project.findUnique({
        where: { id },
    });
}

export async function getRelatedProjects(id: number): Promise<Project[]> {
    return prisma.project.findMany({
        where: { id: { not: id } },
        take: 5,
    });
}

