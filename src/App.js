import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyles from './styles/global';

import store from './store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
            </BrowserRouter>
            <GlobalStyles />
        </Provider>
    );
}

export default App;
