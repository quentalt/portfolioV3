<script lang="ts">
    import { Card, Badge, Button } from 'flowbite-svelte';
    import { CalendarEditOutline, ArrowRightOutline } from "flowbite-svelte-icons";
    import type { PageData } from './$types';

    export let data: PageData;
    $: posts = data.posts;

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
    <title>Blog - Articles et Tutoriels</title>
    <meta name="description" content="Articles et tutoriels sur le développement web moderne : SvelteKit, TypeScript, Tailwind CSS et plus encore." />
</svelte:head>

<section class="section-padding">
    <div class="max-w-screen-xl mx-auto px-4">
        <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Blog
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Articles et tutoriels sur le développement web moderne, mes retours d'expérience et les dernières tendances technologiques.
            </p>
        </div>

        {#if posts && posts.length > 0}
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each posts as post}
                    <Card class="card-hover overflow-hidden">
                        {#if post.image_url}
                            <img
                                    src={post.image_url}
                                    alt={post.title}
                                    class="w-full h-48 object-cover"
                            />
                        {/if}
                        <div class="p-6">
                            <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                <CalendarEditOutline class="w-4 h-4" />
                                {#if post.publishedAt}
                                    {formatDate(post.publishedAt)}
                                {:else}
                                    Date non disponible
                                {/if}
                            </div>

                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {post.title}
                            </h2>

                            {#if post.excerpt}
                                <p class="text-gray-600 dark:text-gray-300 mb-4">
                                    {post.excerpt}
                                </p>
                            {/if}

                            <div class="flex flex-wrap gap-2 mb-4">
                                {#each post.tags as tag}
                                    <Badge color="blue" class="text-sm">
                                        {tag}
                                    </Badge>
                                {/each}
                            </div>

                            <Button
                                    href={`/blog/${post.slug}`}
                                    size="sm"
                                    class="flex items-center gap-2"
                            >
                                Lire l'article
                                <ArrowRightOutline class="w-4 h-4" />
                            </Button>
                        </div>
                    </Card>
                {/each}
            </div>
        {:else}
            <div class="text-center py-12">
                <p class="text-gray-600 dark:text-gray-300 text-lg">
                    Aucun article publié pour le moment.
                </p>
            </div>
        {/if}
    </div>
</section>

<style>
    :global(.card-hover) {
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

    :global(.card-hover:hover) {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
</style>