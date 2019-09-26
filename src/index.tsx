import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App';

import { InjectProvider } from './utils/Inject/InjectProvider';

import './assets/styles/global.scss';

const renderPage = (): React.ReactElement => (
  <InjectProvider>
    <App />
  </InjectProvider>
);

ReactDOM.render(
  renderPage(),
  document.getElementById('root'),
);
