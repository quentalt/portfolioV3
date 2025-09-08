<script lang="ts">
    import { Button, Avatar } from 'flowbite-svelte';
</script>

<section class="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-200">
    <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Pourquoi me choisir ?
                </h2>
                <div class="space-y-4">
                    <div class="flex items-start">
                        <div class="flex-shrink-0 w-6 h-6 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mt-1 transition-colors duration-200">
                            <span class="text-white text-sm">✓</span>
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold text-gray-900 dark:text-white">Communication transparente</h4>
                            <p class="text-gray-600 dark:text-gray-300">Suivi régulier et échanges clairs tout au long du projet</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex-shrink-0 w-6 h-6 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mt-1 transition-colors duration-200">
                            <span class="text-white text-sm">✓</span>
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold text-gray-900 dark:text-white">Livraison dans les délais</h4>
                            <p class="text-gray-600 dark:text-gray-300">Respect des échéances et qualité garantie</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex-shrink-0 w-6 h-6 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mt-1 transition-colors duration-200">
                            <span class="text-white text-sm">✓</span>
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold text-gray-900 dark:text-white">Technologies modernes</h4>
                            <p class="text-gray-600 dark:text-gray-300">Utilisation des dernières technologies web performantes</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex-shrink-0 w-6 h-6 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mt-1 transition-colors duration-200">
                            <span class="text-white text-sm">✓</span>
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold text-gray-900 dark:text-white">Support continu</h4>
                            <p class="text-gray-600 dark:text-gray-300">Assistance et maintenance après la livraison du projet</p>
                        </div>
                    </div>
                </div>
                <Button
                        href="/contact"
                        class="mt-8 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-all duration-200"
                        outline
                >
                    En savoir plus sur moi
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </Button>
            </div>
            <div class="text-center">
                <div class="relative inline-block mb-4">
                    <Avatar
                            src="/photo2.jpg"
                            size="xl"
                            class="mx-auto border-4 border-white dark:border-gray-700 shadow-xl transition-all duration-200"
                    />
                    <div class="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-2 border-white dark:border-gray-700 rounded-full"></div>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quentin</h3>
                <p class="text-primary-600 dark:text-primary-400 font-medium mb-3">Développeur Web Fullstack</p>
                <div class="flex justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        Paris, France
                    </span>
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Disponible
                    </span>
                </div>
            </div>
        </div>
    </div>
</section>