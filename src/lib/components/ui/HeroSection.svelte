<script lang="ts">
    import { Button } from 'flowbite-svelte';
</script>

<section class="hero-gradient text-white py-20 px-4">
    <div class="max-w-4xl mx-auto text-center">
        <div class="text-center">
            <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl mb-3">Développeur Web Freelance</h1>
            <p class="text-xl md:text-2xl mb-8 text-primary-500 leading-relaxed">
                Je crée des sites web modernes, performants et sur mesure pour faire grandir votre activité
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" size="xl" class="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300">
                    Démarrer un projet
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </Button>
                <Button href="/projets" size="xl" class="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300">
                    Voir mes projets
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </Button>
            </div>
        </div>
    </div>
</section>