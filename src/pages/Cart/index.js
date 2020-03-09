import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import colors from '../../styles/colors';
import { Container, ProductTable, Total } from './styles';

const Cart = () => {
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
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/90/D12-2759-890/D12-2759-890_zoom2.jpg?ims=326x"
                                alt="Tenis"
                            />
                        </td>
                        <td>
                            <strong>Tenis do balacubacu</strong>
                            <span>R$ 129,90</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color={colors.green}
                                    />
                                </button>
                                <input type="number" readOnly value={2} />
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
                            <button type="button">
                                <MdDelete size={20} color={colors.green} />
                            </button>
                        </td>
                    </tr>
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

export default Cart;
