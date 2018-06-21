import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import styles from './styles.module.css';
import App from './app'

ReactDOM.render(
  <div className={styles.app}>
    <App />
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
