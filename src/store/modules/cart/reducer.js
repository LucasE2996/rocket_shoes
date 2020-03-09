/**
 * Called when any dispatch from react-redux is fired.
 *
 * @param state
 * @param action The Action object that comes from dispatch function.
 */
export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, { ...action.product, amount: 1 }];
        default:
            return state;
    }
}
