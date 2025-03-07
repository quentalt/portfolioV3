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

export async function getAllTags(): Promise<string[]> {
    const tags = await prisma.project.findMany({
        select: { tags: true }
    });
    return [...new Set(tags.flatMap(p => p.tags))];
}