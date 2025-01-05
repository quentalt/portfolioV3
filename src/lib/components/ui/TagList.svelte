<script lang="ts">
  export let tags: string[];
  export let onTagClick: ((tag: string) => void) | undefined = undefined;
</script>

<div class="flex flex-wrap gap-2">
  {#each tags as tag}
    <span 
      class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 {onTagClick ? 'cursor-pointer' : ''}"
      on:click={() => onTagClick?.(tag)}
    >
      {tag}
    </span>
  {/each}
</div>