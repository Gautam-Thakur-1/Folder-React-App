const fileStructure = [
  {
    name: 'public',
    type: 'folder',
    children: [
      { name: 'favicon.ico', type: 'file', content: '' },
      { name: 'index.html', type: 'file', content: '<!DOCTYPE html><html><head><title>Vite App</title></head><body><div id="root"></div></body></html>' },
    ]
  },
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'assets',
        type: 'folder',
        children: [
          { name: 'logo.svg', type: 'file', content: '' }
        ]
      },
      {
        name: 'components',
        type: 'folder',
        children: [
          {
            name: 'Header.jsx',
            type: 'file',
            content: `import React from 'react';\nexport const Header = () => <header><h1>Vite React App</h1></header>;`
          },
          {
            name: 'Body.jsx',
            type: 'file',
            content: `import React from 'react';\nexport const Body = () => <body><h1>Vite React App</h1></body>;`
          },
          {
            name: 'Footer.jsx',
            type: 'file',
            content: `import React from 'react';\nexport const Footer = () => <footer><p>Footer Content</p></footer>;`
          },
        ]
      },
      {
        name: 'App.jsx',
        type: 'file',
        content: `import React from 'react';\nimport { Header } from './components/Header';\nimport { Footer } from './components/Footer';\n\nconst App = () => (\n  <div>\n    <Header />\n    <main>\n      <p>Hello, welcome to the Vite React app!</p>\n    </main>\n    <Footer />\n  </div>\n);\n\nexport default App;`
      },
      {
        name: 'main.jsx',
        type: 'file',
        content: `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport './index.css';\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);`
      },
      { name: 'index.css', type: 'file', content: 'body { margin: 0; font-family: Arial, sans-serif; }' },
    ]
  },
  { name: 'package.json', type: 'file', content: `{\n  "name": "vite-react-app",\n  "version": "0.1.0",\n  "scripts": {\n    "dev": "vite",\n    "build": "vite build",\n    "serve": "vite preview"\n  },\n  "dependencies": {\n    "react": "^17.0.2",\n    "react-dom": "^17.0.2"\n  },\n  "devDependencies": {\n    "vite": "^2.5.0"\n  }\n}` },
  { name: 'vite.config.js', type: 'file', content: `import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()]\n});` },
  { name: '.gitignore', type: 'file', content: 'node_modules/\ndist/\n.env' },
];

export default fileStructure;
