import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /bg-my-+/,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'my-green': '#00c1b5',
        'my-orange': '#ff651a',
        'my-yellow': '#ffbe00',
        'my-blue': '#1d3fbb',
        'my-red': '#e30512',
        'my-white': '#ffffff'
      },
      fontFamily: {
        'roboto': ['Roboto']
      }
    },
  },
  plugins: [],
}
export default config
