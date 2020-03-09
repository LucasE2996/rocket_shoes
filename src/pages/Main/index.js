import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';

const Main = () => {
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
            .catch(error => console.error(error));
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

                    <button type="button">
                        <div>
                            <MdShoppingCart size={16} color="#FFF" />
                            <p>3</p>
                        </div>

                        <span>Adicionar ao carrinho</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
};

export default Main;
