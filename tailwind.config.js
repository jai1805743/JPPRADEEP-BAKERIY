module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
       colors: {
        banana: '#ffe5a3',
      },
      
    },
  },
  plugins: [],
};
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    // other paths
  ],
  plugins: [
    require('flowbite/plugin')
  ]
};

