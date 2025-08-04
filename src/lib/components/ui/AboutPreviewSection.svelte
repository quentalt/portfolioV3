<script lang="ts">
    import { Button, Avatar } from 'flowbite-svelte';
</script>

<section class="py-16 px-4">
    <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Pourquoi me choisir ?
                </h2>
                <div class="space-y-4">
                    <div class="flex items-start">
                        <div class="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                            <span class="text-white text-sm">✓</span>
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold text-gray-900 dark:text-white">Communication transparente</h4>
                            <p class="text-gray-600 dark:text-gray-300">Suivi régulier et échanges clairs tout au long du projet</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                            <span class="text-white text-sm">✓</span>
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold text-gray-900 dark:text-white">Livraison dans les délais</h4>
                            <p class="text-gray-600 dark:text-gray-300">Respect des échéances et qualité garantie</p>
                        </div>
                    </div>
                </div>
                <Button href="/contact" class="mt-8" outline>
                    En savoir plus sur moi
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </Button>
            </div>
            <div class="text-center">
                <Avatar src="/photo2.jpg" size="xl" class="mx-auto mb-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quentin Altieri</h3>
                <p class="text-primary-600 dark:text-primary-400 font-medium">Développeur Web Fullstack</p>
            </div>
        </div>
    </div>
</section>