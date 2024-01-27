import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "lightgrey": "#F4F6F8",
        "gray": "#9DAEC2",
        "darkgray": "#6E8098",
        "violet": "#5964E0",
        "lightviolet": "#939BF4",
        "verydarkblue": "#19202D",
        "midnight": "#121721",
      },
      fontFamily: {
        "kumbh": ["Kumbh Sans", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
