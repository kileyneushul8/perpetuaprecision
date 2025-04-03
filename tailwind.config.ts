import type { Config } from "tailwindcss"
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // PERPETUA refined brand palette
        "soft-gold": "#EDC87C",
        "deep-blue": "#1C2B39",
        "cerulean-mist": "#A9C4D4",
        parchment: "#F9F6F1",
        "soft-white": "#FDFDFD",
        "slate-gray": "#444444",

        // System colors mapped to brand palette
        // border: "#E5E7EB",
        // input: "#E5E7EB",
        // ring: "#1C2B39",
        // background: "#FDFDFD",
        // foreground: "#444444",
        // primary: {
        //   DEFAULT: "#EDC87C",
        //   foreground: "#1C2B39",
        // },
        // secondary: {
        //   DEFAULT: "#1C2B39",
        //   foreground: "#FDFDFD",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "#F9F6F1",
        //   foreground: "#9CA3AF",
        // },
        // accent: {
        //   DEFAULT: "#EDC87C",
        //   foreground: "#1C2B39",
        // },
        // popover: {
        //   DEFAULT: "#FDFDFD",
        //   foreground: "#444444",
        // },
        // card: {
        //   DEFAULT: "#FDFDFD",
        //   foreground: "#444444",
        // },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

