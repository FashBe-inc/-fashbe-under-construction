const plugin = require("tailwindcss/plugin")

const shadcnPlugin = plugin(
  ({ addBase, addComponents, theme }) => {
    addBase({
      ":root": {
        "--background": "0 0% 0%",
        "--foreground": "0 0% 100%",
        "--card": "0 0% 3%",
        "--card-foreground": "0 0% 100%",
        "--popover": "0 0% 3%",
        "--popover-foreground": "0 0% 100%",
        "--primary": "47 100% 50%", // Yellow from FashBe branding
        "--primary-foreground": "0 0% 0%",
        "--secondary": "0 0% 9%",
        "--secondary-foreground": "0 0% 100%",
        "--muted": "0 0% 9%",
        "--muted-foreground": "0 0% 63.9%",
        "--accent": "0 0% 9%",
        "--accent-foreground": "0 0% 100%",
        "--destructive": "0 62.8% 30.6%",
        "--destructive-foreground": "0 0% 100%",
        "--border": "0 0% 14.9%",
        "--input": "0 0% 14.9%",
        "--ring": "47 100% 50%", // Yellow from FashBe branding
        "--radius": "0.5rem",
        "--secondary2": "47 100% 50%",
        "--secondary3": "47 100% 50%",
        "--secondary4": "47 100% 50%",
        "--success": "142 76% 36%",
        "--warning": "38 92% 50%",
        "--danger": "0 84% 60%",
        "--content1": "0 0% 100%",
        "--content2": "0 0% 93%",
        "--content3": "0 0% 86%",
        "--content4": "0 0% 80%",
        "--divider": "0 0% 20%",
        "--focus-ring": "47 100% 50%",
      },
      ".dark": {
        "--background": "0 0% 0%",
        "--foreground": "0 0% 100%",
        "--card": "0 0% 3%",
        "--card-foreground": "0 0% 100%",
        "--popover": "0 0% 3%",
        "--popover-foreground": "0 0% 100%",
        "--primary": "47 100% 50%", // Yellow from FashBe branding
        "--primary-foreground": "0 0% 0%",
        "--secondary": "0 0% 9%",
        "--secondary-foreground": "0 0% 100%",
        "--muted": "0 0% 9%",
        "--muted-foreground": "0 0% 63.9%",
        "--accent": "0 0% 9%",
        "--accent-foreground": "0 0% 100%",
        "--destructive": "0 62.8% 30.6%",
        "--destructive-foreground": "0 0% 100%",
        "--border": "0 0% 14.9%",
        "--input": "0 0% 14.9%",
        "--ring": "47 100% 50%", // Yellow from FashBe branding
      },
    })

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    })
  },
  {
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
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  },
)

module.exports = { shadcnPlugin }

