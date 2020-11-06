import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

import reduxStore from './components/redux/store';
import * as serviceWorker from './serviceWorker';

import router from './components/router';

const { store } = reduxStore;
const { Routes } = router.components;

const App = () =>{
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
