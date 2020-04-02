import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdShoppingCart } from 'react-icons/md';
import Reactotron from 'reactotron-react-js';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

const Main = () => {
    const dispatch = useDispatch();
    const amountValue = useSelector(state =>
        state.cart.reduce((amount, product) => {
            amount[product.id] = product.amount;

            return amount;
        }, {})
    );
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        return api
            .get('products')
            .then(response =>
                response.data.map(product => ({
                    ...product,
                    priceFormatted: formatPrice(product.price),
                }))
            )
            .catch(error => Reactotron.error(error));
    };

    const handleAddCart = id => {
        dispatch(CartActions.addToCartRequest(id));
    };

    useEffect(() => {
        getProducts().then(response => setProducts(response));
    }, []);

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>

                    <button
                        type="button"
                        onClick={() => handleAddCart(product.id)}
                    >
                        <div>
                            <MdShoppingCart size={16} color="#FFF" />
                            <p>{amountValue[product.id] || 0}</p>
                        </div>

                        <span>Adicionar ao carrinho</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
};

export default Main;
