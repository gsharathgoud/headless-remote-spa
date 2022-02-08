import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

import { ModelManager } from '@adobe/aem-spa-page-model-manager';

// Initialize the ModelManager before invoking ReactDOM.render(...).
ModelManager.initializeAsync();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
