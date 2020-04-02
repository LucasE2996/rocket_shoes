import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

const Header = () => {
    // new version with function component
    const cartSize = useSelector(state => state.cart.length);

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>

            <Cart to="cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
};

/**
 * Old version with class component
 * We can pass parameters to connect function from React Redux.
 * The one we are using is a function that receives the response state from dispatch function as parameter,
 * then we can pass it as an object to the component, or any of its attributes.
 */
// export default connect(state => ({
//     cartSize: state.cart.length,
// }))(Header);

export default Header;
