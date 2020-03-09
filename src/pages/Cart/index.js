import React from 'react';
import { connect } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import colors from '../../styles/colors';
import { Container, ProductTable, Total } from './styles';

const Cart = ({ cart, dispatch }) => {
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
                                    <button type="button">
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
                                    <button type="button">
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
                                    onClick={() =>
                                        dispatch({
                                            type: 'REMOVE_FROM_CART',
                                            id: product.id,
                                        })
                                    }
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

export default connect(mapStateToProps)(Cart);
