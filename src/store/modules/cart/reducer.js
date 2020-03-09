import produce from 'immer';

/**
 * Called when any dispatch from react-redux is fired.
 *
 * @param state
 * @param action The Action object that comes from dispatch function.
 */
export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(
                    p => p.id === action.product.id
                );

                if (productIndex >= 0) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.product,
                        amount: 1,
                    });
                }
            });
        case 'REMOVE_FROM_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });
        default:
            return state;
    }
}
