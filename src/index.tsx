import './index.scss';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const render = (Component: () => JSX.Element) => {
  ReactDom.render(
    <Component />,
    document.getElementById('app')
  );
}

render(App);

if (module.hot) {
  module.hot.accept(['./App'], function () {
    const App = require('./App').default;
    render(App);
  })
}
