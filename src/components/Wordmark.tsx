type Props = {
  light?: boolean;
  className?: string;
};

export default function Wordmark({ light = false, className = '' }: Props) {
  return (
    <a
      href="#top"
      aria-label="Hotel Basilic — retour en haut"
      className={`group inline-flex flex-col leading-none ${className}`}
      dir="ltr"
    >
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
    </a>
  );
}