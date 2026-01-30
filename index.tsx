
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical Error: Root element '#root' not found in document.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render React application:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: sans-serif; text-align: center; background: white; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="color: #ef4444; margin-bottom: 10px;">Application Error</h1>
        <p style="color: #64748b; margin-bottom: 20px;">There was a problem starting the application.</p>
        <button onclick="window.location.reload()" style="padding: 12px 24px; background: #137fec; color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold;">
          Retry Loading
        </button>
      </div>
    `;
  }
}
