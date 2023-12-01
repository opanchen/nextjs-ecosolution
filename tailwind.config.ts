import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    // MEDIA SCREENS
    screens: {
      preSm: "360px",
      sm: "480px",
      md: "768px",
      xl: "1280px",

      smOnly: { max: "767.98px" },
    },
    extend: {
      // FONTS
      fontFamily: {
        "fira-sans": ["var(--font-fira-sans)"],
        oswald: ["var(--font-oswald)"],
        saygon: ["var(--font-saygon)"],
        gothic: ["var(--font-all-round-gothic)"],
      },
      fontSize: {
        //
      },
      // COLORS
      colors: {
        white: {
          primary: "#F3F5FA",
          secondary: "#FFF",
        },
        black: "#292D32",
        green: {
          primary: "#173D33",
          secondary: "97D28B",
          light: "#DCEFD8",
          "alpha-25": "rgba(23, 61, 51, 0.25)",
          "alpha-75": "rgba(23, 61, 51, 0.75)",
        },
        gray: {
          primary: "EAEDF1",
          secondary: "#BDBDBD",
        },
      },
    },
  },
  plugins: [],
};
export default config;

//todo FONTS:
// FONTSPRING DEMO - All Round Gothic Thick (logo)
// CA Saygon Text (logo) 400
// Fira Sans (header btn, btns, address links, primary text)
// Oswald (section heading, grid-card title, counter)
