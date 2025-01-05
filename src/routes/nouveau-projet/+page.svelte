<script lang="ts">
  import ProjectForm from '$lib/components/projects/ProjectForm.svelte';
  import type { ActionData } from './$types';

  export let form: ActionData;
</script>

<div class="container mx-auto px-4 max-w-2xl">
  <h1 class="text-4xl font-bold mb-8">Nouveau Projet</h1>
  <ProjectForm error={form?.error} />
</div>