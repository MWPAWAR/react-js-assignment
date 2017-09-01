import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';
import container from './containers/container';

const store = createStore(reducer);

const root = React.createFactory(container);
ReactDOM.render(root({ store }), document.getElementById('root'));