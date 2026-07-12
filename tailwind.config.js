/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        card: '#f8f9fa',
        accent: '#0d6efd',
        accentLight: '#0b5ed7',
        textPrimary: '#212529',
        textSecondary: '#6c757d',
        bootstrapSuccess: '#198754',
        bootstrapInfo: '#0dcaf0',
        bootstrapWarning: '#ffc107',
        bootstrapDanger: '#dc3545',
        bootstrapDark: '#212529'
      }
    },
  },
  plugins: [],
}
