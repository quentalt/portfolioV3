import { z } from 'zod';

export const projectSchema = z.object({
  name: z.string().min(1, 'Le nom est requis').max(100),
  description: z.string().min(1, 'La description est requise').max(1000),
  link: z.string().url('Le lien doit être une URL valide'),
  image: z.string().url("L'URL de l'image doit être valide"),
  tags: z.array(z.string()).min(1, 'Au moins un tag est requis')
});