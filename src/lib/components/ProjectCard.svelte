<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import type { Project } from '@prisma/client';

  export let project: Project;
</script>

<Card href="/projets/{project.id}" img={project.image}>
  <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {project.name}
  </h5>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    {project.description}
  </p>
  <div class="flex gap-2 mt-2">
    {#each project.tags as tag}
      <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        {tag}
      </span>
    {/each}
  </div>
</Card>