import { createRoot } from 'react-dom/client';
import { name } from './constant';

// Render your React component instead
const root = createRoot(document.getElementById('root')!);
root.render(<h1>Hello, {name}</h1>);
