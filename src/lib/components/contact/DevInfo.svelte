<script lang="ts">
    export let title: string;
    export let items: string[];
</script>

<div class="mb-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        {#each items as item}
            <li>{item}</li>
        {/each}
    </ul>
</div>