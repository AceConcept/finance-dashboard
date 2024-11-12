import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			custom: '8px',
  		},
  		boxShadow: {
  			'custom-button': 
  				'0px 1px 2px 0px rgba(16, 24, 40, 0.05), ' + // outer shadow with blur
  				'inset 0px 0px 1px 0px rgba(16, 24, 40, 0.10), ' + // first inset shadow with blur
  				'inset 0px -1px 1px 0px rgba(16, 24, 40, 0.05)', // second inset shadow with blur
  			'ai-insights': 
  				'0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, ' +
  				'0px -2px 0px 0px rgba(16, 24, 40, 0.05) inset, ' +
  				'0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  		},
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addComponents }) {
      addComponents({
        '.btn-custom': {
          borderRadius: '8px',
          border: '1px solid rgba(208, 213, 221)',
          background: '#FFF',
        },
        '.btn-ai-insights': {
          borderRadius: '8px',
          border: '2px solid rgba(255, 255, 255, 0.12)',
          background: '#004EEB'
        },
      })
    },
  ],
};

export default config;
