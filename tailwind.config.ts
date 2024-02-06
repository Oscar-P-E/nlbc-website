import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", ...fontFamily.sans],
        body: ["var(--font-body)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
        other: ["Lato", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
