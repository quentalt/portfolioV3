<script lang="ts">
    import { Card, Button, Badge } from 'flowbite-svelte';
</script>

<svelte:head>
    <title>Services | Développeur Web Freelance</title>
    <meta name="description" content="Découvrez mes services de développement web : sites vitrine, e-commerce, applications web et optimisation. Tarifs transparents et qualité garantie." />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 py-12">
    <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Mes Services
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des solutions web complètes pour répondre à tous vos besoins digitaux.
            De la simple vitrine au projet complexe, je vous accompagne dans votre transformation numérique.
        </p>
    </div>

    <!-- Services détaillés -->
    <div class="space-y-16">
        <!-- Site Vitrine -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <Badge color="blue" class="mb-4">Site Vitrine</Badge>
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Site Vitrine Professionnel
                </h2>
                <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    Créez une présence en ligne impactante avec un site vitrine moderne,
                    optimisé pour convertir vos visiteurs en clients.
                </p>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Design responsive et moderne</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Optimisation SEO incluse</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Formulaire de contact intégré</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Hébergement et maintenance</span>
                    </li>
                </ul>
            </div>
            <Card class="p-8">
                <img
                        src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
                        alt="Site vitrine exemple"
                        class="w-full h-64 object-cover rounded-lg"
                />
            </Card>
        </div>

        <!-- E-commerce -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <Card class="p-8 order-2 lg:order-1">
                <img
                        src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
                        alt="E-commerce exemple"
                        class="w-full h-64 object-cover rounded-lg"
                />
            </Card>
            <div class="order-1 lg:order-2">
                <Badge color="green" class="mb-4">E-commerce</Badge>
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Boutique en Ligne
                </h2>
                <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    Lancez votre activité e-commerce avec une boutique sécurisée,
                    performante et optimisée pour maximiser vos ventes.
                </p>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Catalogue produits complet</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Paiement sécurisé intégré</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Gestion des stocks</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Administration intuitive</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Application Web -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <Badge color="purple" class="mb-4">Application Web</Badge>
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Application Sur Mesure
                </h2>
                <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    Développement d'applications web complexes et sur mesure
                    pour répondre aux besoins spécifiques de votre entreprise.
                </p>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Technologies modernes</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Interface utilisateur intuitive</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Base de données sécurisée</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">API et intégrations</span>
                    </li>
                </ul>
            </div>
            <Card class="p-8">
                <img
                        src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
                        alt="Application web exemple"
                        class="w-full h-64 object-cover rounded-lg"
                />
            </Card>
        </div>
    </div>

    <!-- Processus de travail -->
    <section class="mt-20 bg-gray-50 dark:bg-gray-800 rounded-2xl p-12">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Mon Processus de Travail
        </h2>
        <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center">
                <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-white text-xl font-bold">1</span>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Analyse</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">Compréhension de vos besoins et objectifs</p>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-white text-xl font-bold">2</span>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Conception</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">Création des maquettes et architecture</p>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-white text-xl font-bold">3</span>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Développement</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">Codage et intégration des fonctionnalités</p>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-white text-xl font-bold">4</span>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Livraison</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">Tests, formation et mise en ligne</p>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <div class="text-center mt-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Prêt à commencer votre projet ?
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé
        </p>
        <Button href="/contact" size="xl">
            Demander un devis
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </Button>
    </div>
</div>