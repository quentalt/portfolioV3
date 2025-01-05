import { prisma } from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { projectSchema } from '$lib/schemas/project';
import { ZodError } from 'zod';

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const formData = {
            name: data.get('name'),
            description: data.get('description'),
            link: data.get('link'),
            image: data.get('image'),
            tags: (data.get('tags') as string)?.split(',').filter(Boolean) || []
        };

        try {
            const validatedData = projectSchema.parse(formData);

            const project = await prisma.project.create({
                data: validatedData
            });

            throw redirect(303, `/projets/${project.id}`);
        } catch (error) {
            if (error instanceof ZodError) {
                return fail(400, {
                    error: error.errors.map(e => e.message).join(', '),
                    data: formData
                });
            }

            return fail(500, {
                error: 'Une erreur est survenue lors de la création du projet',
                data: formData
            });
        }
    }
};