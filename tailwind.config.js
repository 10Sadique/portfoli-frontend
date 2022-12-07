/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                space: "'Space Grotesk', sans-serif",
            },
            colors: {
                'green-bright': '#15d155',
                'dark-gray': '#646464',
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
