/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#4A5AFF",
            },
            fontFamily: {
                primary: ["Poppins", "sans-serif"],
            },
        },
    },  
};