import Link from "next/link";

export default function AnnulePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
        😕
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-3">
        Paiement annulé
      </h1>
      <p className="text-gray-500 mb-8">
        Votre paiement a été annulé. Vos articles sont toujours dans votre
        panier si vous souhaitez réessayer.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/panier"
          className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-pink-400 rounded-full hover:bg-pink-500 transition-colors"
        >
          Retour au panier
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 font-semibold text-pink-500 bg-white rounded-full hover:bg-pink-50 transition-colors border-2 border-pink-400"
        >
          Continuer mes achats
        </Link>
      </div>
    </div>
  );
}
