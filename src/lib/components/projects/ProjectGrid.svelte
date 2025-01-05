<script lang="ts">
  import type { Project } from '@prisma/client';
  import ProjectCard from "$lib/components/ProjectCard.svelte";

  export let projects: Project[];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</div>