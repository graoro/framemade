// tailwind.config.cjs
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: '#e4e4e7',             // light gray border
        muted: '#f4f4f5',              // very light gray background
        'muted-foreground': '#71717a', // muted gray text
        card: '#ffffff',               // white cards
        'card-foreground': '#18181b',  // dark card text
        primary: '#d4d4d8',            // light gray instead of blue
        'primary-foreground': '#18181b', // dark text on primary
      },
    },
  },
  plugins: [],
}
