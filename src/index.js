import React from 'react';
import ReactDOM from 'react-dom';
import BirdyViewApp from './BirdyViewApp';
import { ContextProvider } from './context/Context';
import './styles/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <BirdyViewApp />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
