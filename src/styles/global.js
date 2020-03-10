import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background-vector.svg';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, border-style, #root {
        min-height: 100%;
    }

    body {
        background: #191920  url(${background}) no-repeat center top;
        -webkit-font-smoothing: antialiased !important;
    }

    #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    body, input, button {
        color: #333;
        font: 14px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
