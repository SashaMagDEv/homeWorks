import React from 'react';
import { createRoot } from 'react-dom/client'
import './App.css'
import Emoji from "./App.jsx";


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Emoji />
    </React.StrictMode>,
)
