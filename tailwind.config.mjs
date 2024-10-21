/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'sm': '561px',
      'md': '961px',
      'lg': '1024px',
      'xl': '1441px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
