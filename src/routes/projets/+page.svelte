<script lang="ts">
  import type { PageData } from './$types';
  import SearchBar from '$lib/components/ui/SearchBar.svelte';
  import ProjectGrid from '$lib/components/projects/ProjectGrid.svelte';
  import { filterProjects } from '$lib/utils/projectFilters';

  export let data: PageData;

  let searchTerm = '';
  let selectedTag = '';

  $: filteredProjects = filterProjects(data.projects, searchTerm, selectedTag);
</script>

<div class="container mx-auto px-4">
  <div class="mb-8 space-y-4">
    <SearchBar bind:value={searchTerm} placeholder="Rechercher un projet..." />
    
    <select
      bind:value={selectedTag}
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="">Tous les tags</option>
      {#each data.tags as tag}
        <option value={tag}>{tag}</option>
      {/each}
    </select>
  </div>

  <ProjectGrid projects={filteredProjects} />
</div>