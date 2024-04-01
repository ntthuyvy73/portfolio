import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                base: "'DM Sans', sans-serif",
            },
            colors: {
                "primary-color": "#edf2f8",
                "secondary-color": "#313bac",
                "black-color": " #030303",
                "lightGray-color": "#e4e4e4",
                "gray-color": "#6b7688",
                "brown-color": "#46364a",
                "white-color": "#ffffff",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
