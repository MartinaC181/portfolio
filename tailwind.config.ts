import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E11D48',
        'primary-hover': '#BE123C',
        'primary-light': '#FDA4AF',
        background: '#09090B',
        'background-lighter': '#18181B',
        surface: {
          50: '#FAFAFA',
          100: '#A1A1AA',
          200: '#3F3F46',
        },
      },
    },
  },
  plugins: [],
}

export default config
