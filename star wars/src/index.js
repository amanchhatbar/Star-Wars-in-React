import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import rootSaga from './saga';
import Store from './store';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleWare = createSagaMiddleware();
const store = Store(sagaMiddleWare);
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
<Provider store={store}><App /></Provider>
,document.getElementById('root'));

