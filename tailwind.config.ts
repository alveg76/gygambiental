// tailwind.config.ts
import type { Config } from 'tailwindcss'

// Importamos los colores por defecto de Tailwind para no perderlos
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // ===== CAMBIO IMPORTANTE AQUÍ =====
    // Hemos movido 'colors' fuera de 'extend'
    colors: {
      // Mantenemos los colores base de Tailwind para no romper nada
      ...colors,
      // Y añadimos nuestros colores personalizados
      'green-leaf': '#4CAF50',
      'blue-deep': '#1A5276',
      'gray-light': '#F5F5F5',
      'ocre-soft': '#A1887F',
    },
    extend: {
      // 'extend' ahora solo contiene lo que realmente extiende, como las fuentes
      fontFamily: {
        serif: ['var(--font-merriweather)'],
        sans: ['var(--font-open-sans)'],
      },
    },
  },
  plugins: [],
}
export default config