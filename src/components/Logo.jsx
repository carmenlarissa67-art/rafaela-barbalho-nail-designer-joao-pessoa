import React from 'react';

// Monograma RB em círculo (como a marca do Instagram) + nome em serifa caixa alta + NAIL DESIGNER
export default function Logo({ light = false }) {
  return (
    <span className={`inline-flex items-center gap-3 select-none ${light ? 'text-white' : 'text-brand-800'}`}>
      <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-11 sm:h-11 text-champagne-dark shrink-0" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1" />
        <circle cx="24" cy="24" r="19.5" stroke="currentColor" strokeWidth="0.5" opacity=".6" />
        <text x="24" y="30.5" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontStyle="italic" fontSize="19" letterSpacing="-1" fill="currentColor">RB</text>
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.05rem] sm:text-[1.2rem] font-medium uppercase tracking-[0.16em]">Rafaela Barbalho</span>
        <span className={`mt-1.5 text-[8.5px] tracking-[0.44em] font-medium ${light ? 'text-champagne' : 'text-champagne-dark'}`}>NAIL DESIGNER</span>
      </span>
    </span>
  );
}
