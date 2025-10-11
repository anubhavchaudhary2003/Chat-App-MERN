/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        mygreen: {
          primary: '#34D399',
          'primary-content': '#ffffff',
          // keep background grey instead of white
          'base-100': '#0f1724',
          'base-200': '#111827',
          'base-content': '#ffffff',
        },
      },
      'light',
      'dark',
      'cupcake',
    ],
  },
}

