type Props = {
  label: string;
  title: string;
  intro?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  intro,
  tone = 'light',
  align = 'left',
  className = '',
}: Props) {
  const isDark = tone === 'dark';
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : ''} ${className}`}
    >
      <div
        className={`reveal flex items-center gap-4 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span
          className={`h-px w-10 ${isDark ? 'bg-champagne/60' : 'bg-champagne'}`}
          aria-hidden="true"
        />
        <p className="eyebrow">{label}</p>
      </div>
      <h2
        className={`reveal mt-6 text-balance font-serif text-[clamp(2.4rem,5vw,4.6rem)] font-light leading-[1.02] tracking-[-0.01em] ${
          isDark ? 'text-ivory' : 'text-navy'
        }`}
        style={{ transitionDelay: '80ms' }}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`reveal mt-6 max-w-xl text-[0.98rem] leading-relaxed ${
            isDark ? 'text-ivory/65' : 'text-charcoal/65'
          } ${align === 'center' ? 'mx-auto' : ''}`}
          style={{ transitionDelay: '160ms' }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}