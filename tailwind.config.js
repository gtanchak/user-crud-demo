/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#142130',
                secondary: '#37B7C3',
            },
        },
    },
    plugins: [],
}
