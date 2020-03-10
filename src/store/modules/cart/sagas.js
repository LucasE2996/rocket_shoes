import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess, updateAmount } from './actions';
import { formatPrice } from '../../../util/format';

/**
 * Middleware of addToCart reducer.
 * This "*" means generator function. Which is almost the same as async function but more powerful.
 *
 * @param {Object} saga The object that is being sent as action that this saga is tracking.
 */
function* addToCart({ id }) {
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    if (productExists) {
        const amount = productExists.amount + 1;
        yield put(updateAmount(id, amount));
    } else {
        // yield is the same as await
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };

        yield put(addToCartSuccess(data));
    }
}

/**
 * "all" function subscribes this saga to listeners
 */
export default all([
    // will execute only the last call of dispatch
    takeLatest('@cart/ADD_REQUEST', addToCart),
]);
