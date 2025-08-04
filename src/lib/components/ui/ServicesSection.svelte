<script lang="ts">
    import { Card, Badge } from 'flowbite-svelte';
</script>

<section class="py-16 px-4 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Mes Services
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Des solutions web complètes adaptées à vos besoins
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card class="card-hover">
                <div class="flex items-center mb-4">
                    <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                        <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold ml-4 text-gray-900 dark:text-white">
                        Sites Web
                    </h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Création de sites vitrines et e-commerce responsive, optimisés pour le référencement et les conversions.
                </p>
                <div class="flex flex-wrap gap-2">
                    <Badge color="blue">HTML/CSS</Badge>
                    <Badge color="blue">JavaScript/Typescript</Badge>
                </div>
            </Card>

            <Card class="card-hover">
                <div class="flex items-center mb-4">
                    <div class="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                        <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold ml-4 text-gray-900 dark:text-white">
                        Applications Web
                    </h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Développement d'applications web sur mesure avec les dernières technologies modernes.
                </p>
                <div class="flex flex-wrap gap-2">
                    <Badge color="green">Angular</Badge>
                    <Badge color="green">React/Next</Badge>
                    <Badge color="green">C#</Badge>
                    <Badge color="green">Node.js</Badge>
                </div>
            </Card>

            <Card class="card-hover">
                <div class="flex items-center mb-4">
                    <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                        <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold ml-4 text-gray-900 dark:text-white">
                        Optimisation
                    </h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Amélioration des performances, SEO et expérience utilisateur de vos sites existants.
                </p>
                <div class="flex flex-wrap gap-2">
                    <Badge color="purple">SEO</Badge>
                    <Badge color="purple">Performance</Badge>
                    <Badge color="purple">Analytics</Badge>
                </div>
            </Card>
        </div>
    </div>
</section>