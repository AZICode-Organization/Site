import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'custom-light': 'inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17), inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39)',
      },
      animation: {
        'bounce-in': 'bounceIn 0.5s ease-out 1 forwards',
      },
      keyframes: {
        bounceIn: {
          '0%, 20%, 40%, 60%, 80%, 100%': {
            transform: 'scale(1)',
          },
          '30%': {
            transform: 'scale(1.1)',
          },
          '50%': {
            transform: 'scale(0.9)',
          },
          '70%': {
            transform: 'scale(1.03)',
          },
          '90%': {
            transform: 'scale(0.97)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
