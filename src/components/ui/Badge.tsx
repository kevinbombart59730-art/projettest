interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function Badge({ children, color, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${className}`}
      style={{
        backgroundColor: color ? `${color}33` : undefined,
        color: color || undefined,
      }}
    >
      {children}
    </span>
  );
}
