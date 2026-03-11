import Link from "next/link";
import AnimatedBooks from "./AnimatedBooks";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100 py-20 sm:py-28">
      <AnimatedBooks />
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ animation: "rise-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both" }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
          Apprendre
          <br />
          <span className="text-pink-500">avec plaisir</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Des ressources pédagogiques ludiques et colorées pour accompagner les
          enfants dans leurs apprentissages, de la maternelle au CM2.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#categories"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-pink-400 rounded-full hover:bg-pink-500 transition-colors shadow-sm"
          >
            Découvrir les ressources
          </Link>
          <Link
            href="#vedettes"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-pink-500 bg-white rounded-full hover:bg-pink-50 transition-colors border-2 border-pink-400"
          >
            Nos coups de cœur
          </Link>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200/40 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200/40 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200/40 rounded-full blur-xl" />
    </section>
  );
}
