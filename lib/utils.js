import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const backgroundStyle = {
  backgroundImage: `
    radial-gradient(rgb(0, 0, 255, 0.15) 0%, transparent 10%),
    radial-gradient(rgb(0, 0, 255, 0.15) 0%, transparent 10%)
  `,
  backgroundPosition: '0px 0px, 28px 28px',
  backgroundSize: '56px 56px',
  backgroundColor: 'rgb(255, 255, 255)'
};