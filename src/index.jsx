import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { TestServiceProvider } from './components/service-context';
import TestService from './service/test-service';

const testService = new TestService();

ReactDOM.render(
  <TestServiceProvider value={testService}>
    <App />
  </TestServiceProvider>,
  document.getElementById('root'),
);
