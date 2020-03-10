import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { addToCartSuccess, updateAmount } from './actions';
import { formatPrice } from '../../../util/format';

/**
 * Middleware of addToCart reducer.
 * This "*" after function means generator function. Which is almost the same as async function but more powerful.
 *
 * @param {Object} saga The object that is being sent as action that this saga is tracking.
 */
function* addToCart({ id }) {
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora do estoque');
        return;
    }
    if (productExists) {
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
