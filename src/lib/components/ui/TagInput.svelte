<script lang="ts">
    import { Button } from 'flowbite-svelte';
    import { createEventDispatcher } from 'svelte';

    export let value = '';
    export let tags: string[] = [];

    const dispatch = createEventDispatcher<{
        addTag: string;
        removeTag: string;
    }>();

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter' && value.trim()) {
            event.preventDefault();
            dispatch('addTag', value.trim());
            value = '';
        }
    }

    function handleRemoveTag(tag: string) {
        dispatch('removeTag', tag);
    }
</script>

<div class="space-y-2">
    <div class="flex gap-2">
        <input
                type="text"
                bind:value
                on:keydown={handleKeydown}
                placeholder="Ajouter un tag..."
                class="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
        <Button
                color="primary"
                size="sm"
                on:click={() => {
        if (value.trim()) {
          dispatch('addTag', value.trim());
          value = '';
        }
      }}
        >
            Ajouter
        </Button>
    </div>

    <div class="flex flex-wrap gap-2">
        {#each tags as tag}
      <span
              class="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
      >
        {tag}
          <button
                  type="button"
                  class="ml-1 inline-flex items-center p-0.5 text-primary-400 hover:text-primary-600 dark:hover:text-primary-300"
                  on:click={() => handleRemoveTag(tag)}
          >
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
          </svg>
        </button>
      </span>
        {/each}
    </div>
</div>