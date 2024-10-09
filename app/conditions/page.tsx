export default function ConditionsUtilisation() {
    const sections = [
        { id: "objectif", title: "1. Objectif du service" },
        { id: "donnees", title: "2. Données collectées" },
        { id: "utilisation", title: "3. Utilisation des données" },
        { id: "stockage", title: "4. Absence de stockage des données" },
        { id: "limites", title: "5. Limites du service : \"Nous ne sommes pas docteurs\"" },
        { id: "securite", title: "6. Sécurité et confidentialité" },
        { id: "transmission", title: "7. Transmission à ChatGPT" },
        { id: "responsabilite", title: "8. Responsabilité" },
        { id: "modifications", title: "9. Modifications des conditions d&apos;utilisation" },
        { id: "contact", title: "10. Contact" },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
            <main className="flex-1 container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-[#4400ff] mb-6">Conditions d&apos;utilisation</h1>
                <p className="mb-4 text-[#4400ff]/70"><strong>Date d&apos;entrée en vigueur :</strong> 9/10/2024 </p>
                <p className="mb-6">Bienvenue sur Curaconnect, une application qui recueille des informations personnelles et médicales des utilisateurs pour fournir des analyses et diagnostics préliminaires basés sur les symptômes fournis, en utilisant l&apos;intelligence artificielle de ChatGPT. Curaconnect ne stocke aucune donnée personnelle. Il est important de noter que Curaconnect ne remplace pas un avis médical professionnel. Veuillez lire attentivement ces conditions d&apos;utilisation.</p>

                <nav className="mb-8 p-4 bg-[#4400ff]/10 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2 text-[#4400ff]">Sommaire</h2>
                    <ul className="space-y-1">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <a href={`#${section.id}`} className="text-[#4400ff] hover:underline">{section.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Section 1: Objectif du service */}
                <section id="objectif" className="mb-8">
                    <h2 className="text-2xl font-bold text-[#4400ff] mb-4">1. Objectif du service</h2>
                    <p>Curaconnect est un outil numérique conçu pour aider les utilisateurs à analyser leurs symptômes et à recevoir des recommandations initiales. Le service est basé sur des algorithmes d&apos;intelligence artificielle, dont ChatGPT, et utilise les informations fournies par l&apos;utilisateur pour générer des analyses préliminaires. Il est important de noter que Curaconnect n&apos;est pas un service médical et ne remplace pas un avis médical professionnel.</p>
                </section>

                {/* Section 2: Données collectées */}
                <section id="donnees" className="mb-8">
                    <h2 className="text-2xl font-bold text-[#4400ff] mb-4">2. Données collectées</h2>
                    <p>Les informations recueillies par Curaconnect incluent les symptômes, l&apos;âge, le sexe, la taille, le poids et d&apos;autres informations médicales saisies par l&apos;utilisateur. Aucune donnée personnelle identifiable n&apos;est stockée sur nos serveurs.</p>
                </section>

                {/* Section 3: Utilisation des données */}
                <section id="utilisation" className="mb-8">
                    <h2 className="text-2xl font-bold text-[#4400ff] mb-4">3. Utilisation des données</h2>
                    <p>Les données fournies par l&apos;utilisateur sont utilisées exclusivement pour générer un diagnostic préliminaire. Elles sont traitées en temps réel et ne sont ni stockées ni partagées avec des tiers, à l&apos;exception des traitements nécessaires pour l&apos;analyse via ChatGPT.</p>
                </section>

                {/* Section 4: Absence de stockage des données */}
                <section id="stockage" className="mb-8">
                    <h2 className="text-2xl font-bold text-[#4400ff] mb-4">4. Absence de stockage des données</h2>
                    <p>Curaconnect ne stocke aucune donnée personnelle ou médicale. Les informations saisies sont traitées en temps réel pour fournir une analyse et sont immédiatement supprimées après la génération du diagnostic.</p>
                </section>

                {/* Section 5: Limites du service */}
                <section id="limites" className="mb-8">
                    <h2 className="text-2xl font-bold text-[#4400ff] mb-4">5. Limites du service : Nous ne sommes pas docteurs</h2>
                    <p>Bien que Curaconnect utilise des algorithmes avancés pour fournir des analyses préliminaires, il est important de comprendre que ces analyses ne remplacent en aucun cas un avis médical professionnel. Les utilisateurs sont invités à consulter un médecin pour tout problème de santé grave ou persistant.</p>
                </section>

                {/* Section 6: Sécurité et confidentialité */}
                <section id="securite" className="mb-8">
                    <h2 className="text-2xl font-bold text-[#4400ff] mb-4">6. Sécurité et confidentialité</h2>
                    <p>Curaconnect s&apos;engage à protéger la confidentialité et la sécurité des informations fournies par les utilisateurs. Aucune donnée personnelle n&apos;est stockée, et toutes les communications sont sécurisées à l&apos;aide de protocoles de cryptage modernes.</p>
                </section>

                {/* Section 7: Transmission à ChatGPT */}
                <section id="transmission" className="mb-8">
                    <h2 className="text-2xl font-bold text-[#4400ff] mb-4">7. Transmission à ChatGPT</h2>
                    <p>Les informations saisies par l&apos;utilisateur sont transmises à l&apos;intelligence artificielle ChatGPT pour analyse. ChatGPT traite les données en temps réel et renvoie un diagnostic préliminaire. Aucune information personnelle identifiable n&apos;est stockée après la génération de l&apos;analyse.</p>
                </section>

                {/* Section 8: Responsabilité */}
                <section id="responsabilite" className="mb-8">
                    <h2 className="text-2xl font-bold text-[#4400ff] mb-4">8. Responsabilité</h2>
                    <p>Curaconnect n&apos;assume aucune responsabilité quant à l&apos;utilisation des informations fournies par l&apos;utilisateur ou aux conséquences d&apos;un diagnostic incorrect. Il est de la responsabilité de l&apos;utilisateur de consulter un médecin pour obtenir un avis médical.</p>
                </section>

                {/* Section 9: Modifications des conditions d&apos;utilisation */}
                <section id="modifications" className="mb-8">
                    <h2 className="text-2xl font-bold text-[#4400ff] mb-4">9. Modifications des conditions d&apos;utilisation</h2>
                    <p>Curaconnect se réserve le droit de modifier ces conditions d&apos;utilisation à tout moment. Toute modification sera publiée sur cette page, et les utilisateurs seront informés des changements importants. Il est recommandé de consulter régulièrement cette page pour se tenir informé des mises à jour.</p>
                </section>

                {/* Section 10: Contact */}
                <section id="contact" className="mb-8">
                    <h2 className="text-2xl font-bold text-[#4400ff] mb-4">10. Contact</h2>
                    <p>Pour toute question ou demande d&apos;informations supplémentaires concernant ces conditions d&apos;utilisation, veuillez nous contacter à l&apos;adresse suivante : support@curaconnect.com</p>
                </section>

            </main>
            <footer className="py-6 text-center border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">Dernière mise à jour : 9/10/2024</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">© 2024 Curaconnect. Tous droits réservés.</p>
            </footer>
        </div>
    )
}
