import type { Config } from 'tailwindcss';
import { tokens } from './src/styles/tokens';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: tokens.colors.dark,
        'dark-gray': tokens.colors.darkGray,
        'medium-gray': tokens.colors.mediumGray,
        'light-gray': tokens.colors.lightGray,
        accent: tokens.colors.accent,
      },
      fontSize: {
        h1: tokens.typography.fontSize.h1,
        h2: tokens.typography.fontSize.h2,
        h3: tokens.typography.fontSize.h3,
        body: tokens.typography.fontSize.body,
      },
      fontWeight: {
        ...tokens.typography.fontWeight,
      },
      spacing: tokens.spacing,
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.shadows,
    },
  },
  plugins: [],
};

export default config;
