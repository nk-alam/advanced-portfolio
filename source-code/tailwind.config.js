/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        matrix: {
          green: '#00ff41',
          darkGreen: '#008f11',
          black: '#0d0208',
          darkGray: '#1a1a1a',
          gray: '#2d2d2d',
        },
        cyber: {
          blue: '#00ffff',
          purple: '#ff00ff',
          orange: '#ff4500',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
        hacker: ['Share Tech Mono', 'Monaco', 'monospace'],
      },
      animation: {
        'typing': 'typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite',
        'glitch': 'glitch 0.3s infinite',
        'pulse-green': 'pulse-green 2s infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'decrypt': 'decrypt 2s ease-in-out',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#00ff41' }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        'pulse-green': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        decrypt: {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0px)' }
        }
      },
      boxShadow: {
        'matrix': '0 0 20px #00ff41',
        'cyber': '0 0 30px #00ffff',
        'glow': '0 0 50px rgba(0, 255, 65, 0.3)',
      }
    },
  },
  plugins: [],
};