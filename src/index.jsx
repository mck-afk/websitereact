
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "7.css/dist/7.scoped.css";
import "./index.css";
import { NoteNavProvider } from "./providers/NoteNavProvider";
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <NoteNavProvider>
        <App />
      </NoteNavProvider>
    </HashRouter>
  </StrictMode>,
)
