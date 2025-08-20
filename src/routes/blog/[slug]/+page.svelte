<script lang="ts">
    import { Badge, Button } from 'flowbite-svelte';
    import { CalendarEditOutline, ArrowLeftOutline } from 'flowbite-svelte-icons';
    import type { PageData } from './$types';

    export let data: PageData;

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
</script>
<svelte:head>
    <title>{data.blogPost.title} - Mon Blog</title>
    <meta name="description" content={data.blogPost.excerpt} />
</svelte:head>

{#if data}
    <article class="section-padding">
        <div class="max-w-4xl mx-auto px-4">
            <!-- Back button -->
            <div class="mb-8">
                <Button href="/blog">
                    <ArrowLeftOutline class="w-4 h-4 mr-2" />
                    Retour au blog
                </Button>
            </div>

            <!-- Article header -->
            <header class="mb-8">
                <img
                        src={data.blogPost.image_url}
                        alt={data.blogPost.title}
                        class="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
                />

                <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <CalendarEditOutline class="w-4 h-4" />
                    {#if data.blogPost.publishedAt}
                        {formatDate(data.blogPost.publishedAt)}
                    {:else}
                        Date non disponible
                    {/if}
                </div>

                <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {data.blogPost.title}
                </h1>

                <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
                    {data.blogPost.excerpt}
                </p>

                <div class="flex flex-wrap gap-2">
                    {#each data.blogPost.tags as tag}
                        <Badge color="blue">{tag}</Badge>
                    {/each}
                </div>
            </header>

            <!-- Article content -->
            <div class="prose prose-lg dark:prose-invert max-w-none">
                {@html data.blogPost.content.replace(/\n/g, '<br>').replace(/#{1,6} (.+)/g, (match, title) => {
                    const level = match.split(' ')[0].length;
                    return `<h${level} class="text-${4-level}xl font-bold mt-8 mb-4">${title}</h${level}>`;
                }).replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code>$2</code></pre>')}
            </div>

            <!-- Back to blog -->
            <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Button href="/blog" class="w-full sm:w-auto">
                    <ArrowLeftOutline class="w-4 h-4 mr-2" />
                    Voir tous les articles
                </Button>
            </div>
        </div>
    </article>
{:else}
    <div class="section-padding text-center">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Article non trouvé
        </h1>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
            L'article que vous recherchez n'existe pas ou a été supprimé.
        </p>
        <Button href="/blog">
            Retour au blog
        </Button>
    </div>
{/if}