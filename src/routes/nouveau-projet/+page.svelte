<script lang="ts">
  import ProjectForm from '$lib/components/projects/ProjectForm.svelte';
  import type { ActionData } from './$types';

  export let form: ActionData;
</script>

<div class="container mx-auto px-4 py-8 max-w-2xl">
  <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Nouveau Projet</h1>
  <ProjectForm error={form?.error} data={form?.data} />
</div>