/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#0b0b0e",
        "surface": "#121216",
        "surface-container": "#18181e",
        "surface-container-low": "#141419",
        "surface-container-high": "#202028",
        "surface-container-highest": "#282832",
        "surface-container-lowest": "#070709",
        "surface-bone": "#16161c",
        
        "primary": "#ffffff",
        "on-primary": "#0b0b0e",
        
        "secondary": "#c9a876",
        "secondary-hover": "#b48842",
        "secondary-fixed": "#e9c176",
        "secondary-container": "#c9a876",
        "on-secondary-fixed": "#0b0b0e",
        
        "on-background": "#f4f4f6",
        "on-surface": "#e4e4e7",
        "on-surface-variant": "#9ca3af",
        "outline-variant": "rgba(255, 255, 255, 0.08)",
        "outline-gold": "rgba(201, 168, 118, 0.25)",
        "outline-navy": "rgba(255, 255, 255, 0.06)",
        
        "primary-container": "#15151b",
        "on-primary-container": "#d1d5db"
      },
      fontFamily: {
        "display-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "display-lg": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Hanken Grotesk", "sans-serif"],
        "label-caps": ["Hanken Grotesk", "sans-serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Hanken Grotesk", "sans-serif"],
        "headline-sm": ["Hanken Grotesk", "sans-serif"],
        "headline-lg": ["Hanken Grotesk", "sans-serif"],
        "label-sm": ["Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "display-lg-mobile": ["40px", { "lineHeight": "46px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "display-lg": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.03em", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "30px", "letterSpacing": "0em", "fontWeight": "400" }],
        "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.14em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "26px", "letterSpacing": "0em", "fontWeight": "400" }],
        "headline-md": ["30px", { "lineHeight": "38px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "headline-sm": ["22px", { "lineHeight": "30px", "letterSpacing": "0em", "fontWeight": "600" }],
        "headline-lg": ["44px", { "lineHeight": "52px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "label-sm": ["11px", { "lineHeight": "14px", "letterSpacing": "0.04em", "fontWeight": "500" }]
      },
      spacing: {
        "unit-md": "16px",
        "unit-lg": "32px",
        "container-max": "1200px",
        "unit-sm": "8px",
        "unit-xl": "64px",
        "unit-xs": "4px",
        "gutter": "32px",
        "section-desktop": "100px",
        "section-mobile": "56px",
        "stack-md": "16px",
        "stack-sm": "8px",
        "stack-lg": "32px",
        "section-padding-mobile": "56px",
        "section-padding-desktop": "100px"
      }
    },
  },
  plugins: [],
}
