interface PriceTagProps {
  price: number; // en centimes
  className?: string;
}

export default function PriceTag({ price, className = "" }: PriceTagProps) {
  if (price === 0) {
    return <span className={`font-bold text-green-600 ${className}`}>Gratuit</span>;
  }

  const formatted = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price / 100);

  return <span className={`font-bold text-gray-800 ${className}`}>{formatted}</span>;
}
