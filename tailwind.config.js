module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { night: '#0a0a0a', navy: '#141414', panel: '#1e1e1e', gold: '#f2b01e', golddk: '#946300', cream: '#f6f3ec', ink: '#111111' },
    fontFamily: { display: ['var(--font-display)', 'system-ui', 'sans-serif'], body: ['var(--font-body)', 'system-ui', 'sans-serif'] },
  } },
  plugins: [],
};
