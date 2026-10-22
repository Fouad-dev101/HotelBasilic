type Props = {
  light?: boolean;
  className?: string;
};

export default function Wordmark({ light = false, className = '' }: Props) {
  return (
    <a
      href="#top"
      aria-label="Hotel Basilic — retour en haut"
      className={`group inline-flex items-center gap-3 ${className}`}
      dir="ltr"
    >
      {/* This is the image tag pulling from your public folder */}
      <img
        src="/logo.jpg" 
        alt="Hotel Basilic Logo"
        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border border-champagne/30"
      />
      
      {/* This is the text next to the logo */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif text-[1.18rem] tracking-[0.22em] transition-colors duration-500 sm:text-[1.3rem] ${
            light ? 'text-ivory' : 'text-navy'
          }`}
        >
          HOTEL BASILIC
        </span>
        <span
          className={`mt-1.5 text-[0.46rem] uppercase tracking-[0.45em] transition-colors duration-500 ${
            light ? 'text-ivory/60' : 'text-charcoal/50'
          }`}
        >
          Al Hoceima — Maroc
        </span>
      </div>
    </a>
  );
}