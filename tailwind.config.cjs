/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matrix': '#1aff1a',
        'cyber': {
          'dark': '#0a0a0a',
          'light': '#1a1a1a',
          'accent': '#1aff1a',
          'glow': '#1aff1a33',
        },
        'terminal': {
          'black': '#000000',
          'green': '#1aff1a',
          'blue': '#3385ff',
          'red': '#ff3333',
        }
      },
      animation: {
        'terminal-blink': 'blink 1s step-end infinite',
        'matrix-flow': 'matrix 20s linear infinite',
        'glitch': 'glitch 1s linear infinite',
        'scan': 'scan 2s ease-in-out infinite',
        'scan-line': 'scan-line 2s linear infinite',
        'loading': 'loading 2s ease-in-out infinite',
        'cyber-glow': 'cyber-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'matrix': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      fontFamily: {
        'cyber': ['Share Tech Mono', 'monospace'],
        'matrix': ['Matrix Code NFI', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(transparent 97%, var(--matrix) 97%), linear-gradient(90deg, transparent 97%, var(--matrix) 97%)',
      },
      opacity: {
        '15': '0.15',
        '35': '0.35',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        hacker: {
          "primary": "#1aff1a",
          "secondary": "#1a1a1a",
          "accent": "#3385ff",
          "neutral": "#0a0a0a",
          "base-100": "#000000",
          "info": "#3385ff",
          "success": "#1aff1a",
          "warning": "#ffff33",
          "error": "#ff3333",
        },
      },
      "light",
      "dark"
    ],
  },
} 