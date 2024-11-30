import type { Config } from "tailwindcss";
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

const config: Config = {
  darkMode: "class", 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#053247",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors, 
  ],
};

function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: any;
  theme: any;
}) {
  const allColors = flattenColorPalette(theme("colors")); 
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]) 
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
