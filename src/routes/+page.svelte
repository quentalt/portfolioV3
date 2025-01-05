<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="container mx-auto px-4">
  <div class="text-center mb-12">
    <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text">
      Bienvenue sur mon Portfolio
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-400">
      Découvrez mes derniers projets et réalisations
    </p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each data.projects as project}
      <ProjectCard {project} />
    {/each}
  </div>

  <div class="mt-12 text-center">
    <a 
      href="/projets" 
      class="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300"
    >
      Voir tous les projets
      <svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>