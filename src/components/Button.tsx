import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Variant = 'solid' | 'outline' | 'dark' | 'ghost';

const variantClass: Record<Variant, string> = {
  solid: 'btn-solid',
  outline: 'btn-outline',
  dark: 'btn-dark',
  ghost: 'btn-ghost',
};

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
  arrow?: boolean;
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'solid',
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
  arrow = false,
}: Props) {
  const classes = `btn ${variantClass[variant]} ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          size={14}
          strokeWidth={1.5}
          aria-hidden="true"
          className="shrink-0 rtl:-scale-x-100"
        />
      )}
    </>
  );

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {content}
    </button>
  );
}