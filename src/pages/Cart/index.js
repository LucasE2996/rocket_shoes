import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import colors from '../../styles/colors';
import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

const Cart = ({ cart, removeFromCart, updateAmount }) => {
    const increment = product => {
        updateAmount(product.id, product.amount + 1);
    };

    const decrement = product => {
        updateAmount(product.id, product.amount - 1);
    };

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => decrement(product)}
                                    >
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color={colors.green}
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => increment(product)}
                                    >
                                        <MdAddCircleOutline
                                            size={20}
                                            color={colors.green}
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$ 259,80</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    <MdDelete size={20} color={colors.green} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar Pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>R$ 1920,26</strong>
                </Total>
            </footer>
        </Container>
    );
};

const mapStateToProps = state => ({
    cart: state.cart,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
