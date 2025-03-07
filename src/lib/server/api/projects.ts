import { prisma } from '../prisma';
import type { Project } from '@prisma/client';

export async function getProjects(options?: {
    take?: number;
    skip?: number;
    orderBy?: 'asc' | 'desc';
    tag?: string;
    search?: string;
}) {
    const where = {
        AND: [
            options?.tag ? { tags: { has: options.tag } } : {},
            options?.search ? {
                OR: [
                    { title: { contains: options.search, mode: 'insensitive' } },
                    { description: { contains: options.search, mode: 'insensitive' } }
                ]
            } : {}
        ]
    };

    const [projects, total] = await Promise.all([
        prisma.project.findMany({
            where,
            take: options?.take,
            skip: options?.skip,
            orderBy: { createdAt: options?.orderBy || 'desc' }
        }),
        prisma.project.count({ where })
    ]);

    return { projects, total };
}

export async function getProjectById(id: string) {
    return prisma.project.findUnique({ where: { id } });
}

export async function updateProject(id: string, data: Partial<Omit<Project, 'id' | 'createdAt' | 'updatedAt'>>) {
    return prisma.project.update({
        where: { id },
        data
    });
}

export async function deleteProject(id: string) {
    return prisma.project.delete({ where: { id } });
}

export async function getAllTags() {
    const tags = await prisma.project.findMany({
        select: { tags: true }
    });
    return [...new Set(tags.flatMap(p => p.tags))];
}

export async function getRelatedProjects(projectId: string, limit = 3) {
    const project = await prisma.project.findUnique({
        where: { id: projectId },
        select: { tags: true }
    });

    if (!project) return [];

    return prisma.project.findMany({
        where: {
            AND: [
                { id: { not: projectId } },
                { tags: { hasSome: project.tags } }
            ]
        },
        take: limit,
        orderBy: { createdAt: 'desc' }
    });
}