import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Cart from './pages/Cart';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/cart" exact component={Cart} />
        </Switch>
    );
}
