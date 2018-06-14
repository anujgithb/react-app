/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import Store from './store';
const StoreInstance = Store();


ReactDOM.render(
    <Provider store={StoreInstance}>
        <App />
    </Provider>, 
document.getElementById('root')
);
registerServiceWorker();
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './todo/reducer'
import App from './todo/components/App'

const store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)