const colors = require('tailwindcss/colors')

module.exports = {
  keyframes: {
  meteor: {
    '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
    '70%': { opacity: '1' },
    '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
  },
  glowPulse: {
    '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
    '50%': { opacity: '0.85', transform: 'scale(1.08)' },
  },
  ringSpin: {
    from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
    to: { transform: 'translate(-50%, -50%) rotate(360deg)' },
  },
  ringSpinReverse: {
    from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
    to: { transform: 'translate(-50%, -50%) rotate(-360deg)' },
  },
},
animation: {
  meteor: 'meteor 3s linear infinite',
  'glow-pulse': 'glowPulse 4s ease-in-out infinite',
  'ring-spin-slow': 'ringSpin 60s linear infinite',
  'ring-spin-slower': 'ringSpinReverse 90s linear infinite',
  'ring-spin-slowest': 'ringSpin 140s linear infinite',
},
}