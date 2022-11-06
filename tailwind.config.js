/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0C0C1D',
                secondary: '#2D2C3E',
                green: '#65D46C',
                white: '#ffffff',
                gray: '#EEEEEE',
            },
        },
    },
    plugins: [],
};
