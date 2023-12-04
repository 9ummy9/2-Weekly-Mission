import './indexCss.css';
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import Main from './components/Main';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<Main />);


