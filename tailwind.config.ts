import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        heading: ["Lexend", ...defaultTheme.fontFamily.sans],
        body: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      width: {
        "673": "42rem",
      },
    },
  },
};
