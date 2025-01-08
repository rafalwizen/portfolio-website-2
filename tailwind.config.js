/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    light: 'rgb(248,248,248)',
                    DEFAULT: 'rgb(255,255,255)'
                },
                text: {
                    primary: '#000000',
                    secondary: 'rgb(0,0,0,0.8)'
                },
                border: {
                    DEFAULT: 'rgb(209,213,219)'
                }
            },
            keyframes: {
                fadeIn: {
                    'from': {
                        opacity: '0',
                        transform: 'translate(-50%, -40%)'
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translate(-50%, -50%)'
                    },
                },
                fadeOut: {
                    'from': {
                        opacity: '1',
                        transform: 'translate(-50%, -50%)'
                    },
                    'to': {
                        opacity: '0',
                        transform: 'translate(-50%, -60%)'
                    },
                }
            },
            animation: {
                'fadeIn': 'fadeIn 0.5s ease-out',
                'fadeOut': 'fadeOut 0.5s ease-out 2.5s'
            }
        }
    },
    plugins: [],
}