import { fontFamily } from 'tailwindcss/defaultTheme'
const {
    default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme('colors'))
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
    )

    addBase({
        ':root': newVars,
    })
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: '',
    theme: {
        fontFamily: {
            sans: ['var(--font-sans)', ...fontFamily.sans],
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },

                // shimmer button
                'spin-around': {
                    '0%': {
                        transform: 'translateZ(0) rotate(0)',
                    },
                    '15%, 35%': {
                        transform: 'translateZ(0) rotate(90deg)',
                    },
                    '65%, 85%': {
                        transform: 'translateZ(0) rotate(270deg)',
                    },
                    '100%': {
                        transform: 'translateZ(0) rotate(360deg)',
                    },
                },
                slide: {
                    to: {
                        transform: 'translate(calc(100cqw - 100%), 0)',
                    },
                },

                // orbiting-circles
                orbit: {
                    '0%': {
                        transform:
                            'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)',
                    },
                    '100%': {
                        transform:
                            'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)',
                    },
                },

                // spotlight
                spotlight: {
                    '0%': {
                        opacity: 0,
                        transform: 'translate(-72%, -62%) scale(0.5)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translate(-50%,-40%) scale(1)',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',

                // shimmer button
                'spin-around':
                    'spin-around calc(var(--speed) * 2) infinite linear',
                slide: 'slide var(--speed) ease-in-out infinite alternate',

                // orbiting-circles
                orbit: 'orbit calc(var(--duration)*1s) linear infinite',

                // spotlight
                spotlight: 'spotlight 2s ease .75s 1 forwards',
            },
        },
    },
    plugins: [require('tailwindcss-animate'), addVariablesForColors],
}
