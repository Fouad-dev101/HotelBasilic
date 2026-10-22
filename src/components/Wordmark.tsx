type Props = {
  light?: boolean;
  className?: string;
};

export default function Wordmark({ light = false, className = '' }: Props) {
  return (
    <a
      href="#top"
      aria-label="Hotel Basilic — retour en haut"
      className={`group flex items-center gap-2.5 ${className}`}
      dir="ltr"
    >
      <img
        src="/logo.jpg" 
        alt="Hotel Basilic Logo"
        className="h-8 w-8 rounded-full object-cover border border-champagne/30"
      />
      
      <span
        className={`font-serif text-[1.1rem] tracking-[0.2em] transition-colors duration-500 sm:text-[1.25rem] ${
          light ? 'text-ivory' : 'text-navy'
        }`}
      >
        HOTEL BASILIC
      </span>
    </a>
  );
}