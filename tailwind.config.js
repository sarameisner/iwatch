/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/templates/**/*.{js,ts,jsx,tsx,mdx}", "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom": "linear-gradient(294deg, #C8DCE5 0%, #B6CCDA 100%)",
      },
      lineHeight: {
        custom: "6rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGray60: "rgba(67, 69, 88, 0.6)",
        lightTeal: "rgba(106, 221, 204, 0.6)",
        peach: "rgba(249, 205, 196, 0.6)",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [{ "headwind.runOnSave": true }],
};
