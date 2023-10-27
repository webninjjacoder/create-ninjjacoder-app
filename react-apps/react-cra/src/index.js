import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BaseLayout, Header, Footer } from '@mskcc/carbon-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BaseLayout
      header={<Header productName='Create React App' />}
      footer={<Footer />}
    >
      <App />
    </BaseLayout>
  </React.StrictMode>
);
