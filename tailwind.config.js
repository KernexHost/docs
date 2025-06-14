export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
