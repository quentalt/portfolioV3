<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="container mx-auto px-4 max-w-4xl">
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
    <img src={data.project.image} alt={data.project.name} class="w-full h-64 object-cover">

    <div class="p-6">
      <h1 class="text-4xl font-bold mb-4">{data.project.name}</h1>

      <div class="flex gap-2 mb-4">
        {#each data.project.tags as tag}
          <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {tag}
          </span>
        {/each}
      </div>

      <p class="text-gray-700 dark:text-gray-300 mb-6">
        {data.project.description}
      </p>

      <a
              href={data.project.link}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Voir le projet
        <svg class="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
</div>