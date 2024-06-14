import { name } from './constant';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Render your React component instead
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <h1>Hello, {name}</h1>
    </React.StrictMode>
)
