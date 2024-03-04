import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'xs': ['12px','18.7px'],
      'sm': ['14px','18.7px'],
      'm': ['16px','24px'],
      'lg': ['16px','24px'],
      'xl': ['24px','38px'],
      '2xl': ['28px', '38px'],
      '4xl': ['64px', '70px'],
      
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        light:"#FFFFFF",
        dark:"#000000",
        smoke70:"#131313",
        smoke60:"#494949",
        smoke50:"#7F7F7F",
        smoke40:"#9F9F9F",
        smoke30:"#BCBCBC",
        smoke20:"#E4E4E4",
        smoke10:"#FAFAFA"
      },
      fontFamily: {
        'mono': ['SuisseIntlMono', 'Monaco', 'Courier New', 'monospace'],
        'untitled':['UntitledSerifRegular', 'serif'],
        'italic':['UntitledSerifItalic', 'serif'],
        'suisse':['SuisseIntlRegular', 'sans-serif'],
        'sans':['UntitledSansRegular', 'sans-serif'],
        'melior':['Melior', 'serif'],
      },
      keyframes: {
        'slide-down':{
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      spacing:{
        '0.5':'0.1rem',
      },
      display: ['group-hover'],
      vsibility: ['group-hover'],
      screens: {
        'ipad': {'min': '768px', 'max': '1024px'},
      }
    }
    
  },
  variants: {
    extend: {
      textColor: ['hover'],
      backgroundColor: ['hover'], // This enables hover for background color
    }
  },
  plugins: [],
};
export default config;
