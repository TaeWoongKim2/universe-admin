import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: boerder-box;
    }
    
    body {
        font-family: sans-serif, -apple-system;
        font-size: 14px;
        height: 100vh;
        margin: 0;
        background-color: #F9F9F9;
    }
`;

export default GlobalStyles;
