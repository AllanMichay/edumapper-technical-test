import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        beige: '#F7F3F0',
        card: '#FF7342',
        'main-border': 'rgba(27, 27, 27, 0.1)',
        black: '#1B1B1B',
        focus: '#B176FF',
        gray: '#646A81',
      },
      spacing: {
        tablet: '720px',
      },
      fontFamily: {
        main: ['DM Sans', 'sans-serif'],
      },
    },
  },
};
