import React from 'react';
// so apperently we are not using ReactDom anymore
import ReactDOM from 'react-dom'
import App from './App';

// but I can just add this and we seem to be back in business
import { createRoot } from 'react-dom/client';
const container = document.querySelector('#root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

// ReactDOM.render(<App />, document.querySelector('#root'));