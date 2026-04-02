export const tokens = {
  colors: {
    dark: '#0a0a0a',
    darkGray: '#111111',
    mediumGray: '#666666',
    lightGray: '#999999',
    white: '#ffffff',
    accent: '#00ff88', // Neon green
  },
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    fontSize: {
      h1: '56px',
      h2: '36px',
      h3: '24px',
      body: '16px',
      small: '14px',
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
    md: '0 4px 16px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
};

export type Tokens = typeof tokens;
