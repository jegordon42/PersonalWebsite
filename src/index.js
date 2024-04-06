import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { themes } from './themes'
import {Provider} from 'react-redux'
import Store from './store/Store'
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

rootElement.onmousemove = function(e) {
  const background = 'radial-gradient(600px at ' + e.pageX + 'px ' + e.pageY + 'px,' +
  themes.blue.colors.backgroundGradient + ', transparent 80%)';
  rootElement.style.setProperty('background', background);
}
