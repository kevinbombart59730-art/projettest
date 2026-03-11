import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🎨</span>
              <span className="font-bold text-gray-800">
                Apprendre avec plaisir
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              Des ressources pédagogiques ludiques et colorées pour accompagner
              les enfants dans leurs apprentissages.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Catégories</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/categorie/lecture" className="hover:text-pink-500 transition-colors">
                  Lecture
                </Link>
              </li>
              <li>
                <Link href="/categorie/mathematiques" className="hover:text-pink-500 transition-colors">
                  Mathématiques
                </Link>
              </li>
              <li>
                <Link href="/categorie/grammaire" className="hover:text-pink-500 transition-colors">
                  Grammaire
                </Link>
              </li>
              <li>
                <Link href="/categorie/ecriture" className="hover:text-pink-500 transition-colors">
                  Écriture
                </Link>
              </li>
              <li>
                <Link href="/categorie/pluridisciplinarite" className="hover:text-pink-500 transition-colors">
                  Pluridisciplinarité
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Informations</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Paiement sécurisé par Stripe</li>
              <li>Téléchargement immédiat en PDF</li>
              <li>Support par email</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Apprendre avec plaisir. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
}
