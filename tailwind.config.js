/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    theme: {
        container: {
            center: true,
            padding: "1rem"
        },
        fontSize: {
            xs: ".75rem",
            sm: "1rem",
            base: "1rem",
            md: "1.25rem",
            lg: "1.5rem",
            xl: "1.75rem",
            "2xl": "2rem",
            "3xl": "2.25rem",
            "4xl": "2.5rem",
            "5xl": "2.75rem",
            "6xl": "3rem",
        }
    },
    variants: {},
    plugins: [],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === "production",
        content: [
            "components/**/*.vue",
            "layouts/**/*.vue",
            "pages/**/*.vue",
            "plugins/**/*.js",
            "nuxt.config.js"
        ]
    }
};
