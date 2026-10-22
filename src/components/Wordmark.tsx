type Props = {
  light?: boolean;
  className?: string;
};

export default function Wordmark({ light = false, className = '' }: Props) {
  return (
    <a
      href="#top"
      aria-label="Hotel Basilic — retour en haut"
      className={`group inline-flex items-center ${className}`}
      dir="ltr"
    >
      <img
        src="/logo.jpg" 
        alt="Hotel Basilic Logo"
        className="h-14 w-auto object-contain mix-blend-screen transition-opacity duration-500 group-hover:opacity-80 sm:h-16"
      />
    </a>
  );
}