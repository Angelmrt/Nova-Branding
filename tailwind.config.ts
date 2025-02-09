import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        colorprincipal: 'rgba(229, 180, 34, 1)',
        colorsecundario: 'rgba(255, 255, 255, 1)',
        fondoheader: 'rgba(33, 33, 33, 1)',
        fondopartners: 'rgba(65, 65, 65, 1)',
        fondoproyectos: 'rgba(98, 98, 98, 1)',
        colorborde: 'rgba(0, 0, 0, 1)',
      },
      spacing: {
        'font-size-titulo': '64px',
        'font-size-subtitulo': '36px',
        'font-size-titulo2': '48px',
        'font-size-header-footer': '20px',
      },
    },
  },
  plugins: [],
};

export default config;
