import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: { boxShadow: { glow: '0 0 30px rgba(34, 211, 238, .18)' } } },
  plugins: []
} satisfies Config;
