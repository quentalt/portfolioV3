<script lang="ts">
    import { Card, Button, Badge } from 'flowbite-svelte';
</script>

<svelte:head>
    <title>Services | Développeur Web Freelance</title>
    <meta name="description" content="Découvrez mes services de développement web : sites vitrine, e-commerce, applications web et optimisation. Tarifs transparents et qualité garantie." />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 py-12 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
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
        <!-- E-commerce -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <Card class="p-8 order-2 lg:order-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-200">
                <img
                        src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
                        alt="E-commerce exemple"
                        class="w-full h-64 object-cover rounded-lg shadow-md"
                />
            </Card>
            <div class="order-1 lg:order-2">
                <Badge color="green" class="mb-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700">E-commerce</Badge>
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Boutique en Ligne
                </h2>
                <!--                <p class="text-orange-500 dark:text-orange-400 font-semibold mb-4">À partir de 2500 €</p>-->
                <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    Lancez votre activité e-commerce avec une boutique sécurisée,
                    performante et optimisée pour maximiser vos ventes.
                </p>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Catalogue produits complet</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Paiement sécurisé intégré</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Gestion des stocks</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <Badge color="purple" class="mb-4 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-700">Application Web</Badge>
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Application Sur Mesure
                </h2>
                <p class="text-orange-500 dark:text-orange-400 font-semibold mb-4">En discuter pour la durée et de la complexité</p>
                <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    Développement d'applications web complexes et sur mesure
                    pour répondre aux besoins spécifiques de votre entreprise.
                </p>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Technologies modernes</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Interface utilisateur intuitive</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Base de données sécurisée</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">API et intégrations</span>
                    </li>
                </ul>
            </div>
            <Card class="p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-200">
                <img
                        src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
                        alt="Application web exemple"
                        class="w-full h-64 object-cover rounded-lg shadow-md"
                />
            </Card>
        </div>
    </div>

    <!-- Processus de travail -->
    <!-- Sites Vitrine - Section regroupée -->
    <section class="mb-20">
        <div class="text-center mb-12">
            <Badge color="blue" class="mb-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700">Sites Vitrine</Badge>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Formules Site Vitrine
            </h2>
            <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Trois formules adaptées à vos besoins et votre budget
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            <!-- Basique -->
            <Card class="p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-200">
                <div class="text-center mb-6">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Basique</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">2-3 jours de travail</p>
                    <div class="mb-4">
                        <!--                        <p class="text-sm text-gray-500 dark:text-gray-400 line-through">800-1200 €</p>-->
                        <p class="text-3xl font-bold text-orange-500 dark:text-orange-400">20 €</p>
                        <!--                        <p class="text-xs text-orange-600 dark:text-orange-400 mt-1">Offre Black Friday</p>-->
                    </div>
                </div>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">5 pages maximum</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Design moderne et responsive</span>
                    </li><li class="flex items-start">
                    <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">Animations basiques</span>
                </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Formulaire de contact</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Responsive mobile/tablette</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Intégration réseaux sociaux</span>
                    </li>
                </ul>
                <Button href="/contact" class="w-full bg-gray-600 hover:bg-gray-700 text-white border-none">
                    Choisir cette formule
                </Button>
            </Card>

            <!-- Standard -->
            <Card class="p-8 bg-white dark:bg-gray-800 border-2 border-primary-500 dark:border-primary-400 relative shadow-xl transition-all duration-200">
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span class="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Populaire</span>
                </div>
                <div class="text-center mb-6">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Standard</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">4-5 jours de travail</p>
                    <div class="mb-4">
                        <!--                        <p class="text-sm text-gray-500 dark:text-gray-400 line-through">1200-1800 €</p>-->
                        <p class="text-3xl font-bold text-orange-500 dark:text-orange-400">60 €</p>
                        <!--                        <p class="text-xs text-orange-600 dark:text-orange-400 mt-1">Offre Black Friday</p>-->
                    </div>
                </div>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Tout du Basique +</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Jusqu'à 10 pages</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Animations personnalisées</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Optimisation SEO de base</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Intégration Google Analytics</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Blog/Actualités (pour alimenter le contenu)</span>
                    </li>
                </ul>
                <Button href="/contact" class="w-full bg-primary-600 hover:bg-primary-700 text-white border-none">
                    Choisir cette formule
                </Button>
            </Card>

            <!-- Premium -->
            <Card class="p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-200">
                <div class="text-center mb-6">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Premium</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">6-8 jours de travail</p>
                    <div class="mb-4">
                        <!--                        <p class="text-sm text-gray-500 dark:text-gray-400 line-through">1800-2500 €</p>-->
                        <p class="text-3xl font-bold text-orange-500 dark:text-orange-400">1200 €</p>
                        <!--                        <p class="text-xs text-orange-600 dark:text-orange-400 mt-1">Offre Black Friday</p>-->
                    </div>
                </div>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Tout du Standard +</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Design 100% sur mesure</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Système réservation/paiement</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Optimisation SEO poussée</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Intégration newsletter (Mailjet, Listmonk ...)</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300 text-sm">Multilingue (2 langues)</span>
                    </li>
                </ul>
                <Button href="/contact" class="w-full bg-gray-600 hover:bg-gray-700 text-white border-none">
                    Choisir cette formule
                </Button>
            </Card>
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
        <Button
                href="/contact"
                size="xl"
                class="bg-primary-600 dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-200"
        >
            Demander un devis
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </Button>
    </div>
</div>