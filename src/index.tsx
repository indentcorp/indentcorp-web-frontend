import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const rootElement = document.getElementById('root') as HTMLElement;
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
}

serviceWorker.unregister();
