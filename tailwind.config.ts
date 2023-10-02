import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        prime: "var(--prime)",
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
