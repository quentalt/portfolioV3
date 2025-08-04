<script lang="ts">
    import { Button } from 'flowbite-svelte';
</script>

<section class="py-16 px-4 bg-primary-600 dark:bg-primary-800 text-white">
    <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4">
            Prêt à lancer votre projet ?
        </h2>
        <p class="text-xl mb-8 text-primary-100">
            Discutons de vos besoins et transformons vos idées en réalité
        </p>
        <Button href="/contact" size="xl" color="light">
            Demander un devis gratuit
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </Button>
    </div>
</section>