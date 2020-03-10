import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess } from './actions';

/**
 * Middleware of addToCart reducer.
 * This "*" means generator function. Which is almost the same as async function but more powerful.
 *
 * @param {Object} saga The object that is being sent as action that this saga is tracking.
 */
function* addToCart({ id }) {
    // yield is the same as await
    const response = yield call(api.get, `/products/${id}`);

    yield put(addToCartSuccess(response.data));
}

/**
 * "all" function subscribes this saga to listeners
 */
export default all([
    // will execute only the last call of dispatch
    takeLatest('@cart/ADD_REQUEST', addToCart),
]);
