<script lang="ts">
  import { Search } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';

  export let value = '';
  export let placeholder = 'Rechercher...';

  const dispatch = createEventDispatcher<{
    search: string;
  }>();

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    dispatch('search', target.value);
  }
</script>

<div class="relative">
  <Search
    bind:value
    {placeholder}
    on:input={handleInput}
    class="w-full"
  />
</div>