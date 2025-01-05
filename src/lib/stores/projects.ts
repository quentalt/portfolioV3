import { writable } from 'svelte/store';
import type { Project } from '@prisma/client';

export const projectsStore = writable<{
    projects: Project[];
    total: number;
    loading: boolean;
    error: string | null;
}>({
    projects: [],
    total: 0,
    loading: false,
    error: null
});

export async function fetchProjects(options?: {
    take?: number;
    skip?: number;
    tag?: string;
    search?: string;
    orderBy?: 'asc' | 'desc';
}) {
    projectsStore.update(s => ({ ...s, loading: true, error: null }));

    try {
        const params = new URLSearchParams();
        if (options?.take) params.set('take', options.take.toString());
        if (options?.skip) params.set('skip', options.skip.toString());
        if (options?.tag) params.set('tag', options.tag);
        if (options?.search) params.set('search', options.search);
        if (options?.orderBy) params.set('orderBy', options.orderBy);

        const response = await fetch(`/api/projects?${params}`);
        if (!response.ok) throw new Error('Failed to fetch projects');

        const data = await response.json();
        projectsStore.set({
            projects: data.projects,
            total: data.total,
            loading: false,
            error: null
        });
    } catch (error) {
        projectsStore.update(s => ({
            ...s,
            loading: false,
            error: error instanceof Error ? error.message : 'An error occurred'
        }));
    }
}