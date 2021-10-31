import { Global, css } from '@emotion/react';

import reset from 'styled-reset';

function GlobalStyles() {
  return (
    <Global
      styles={css`
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
        `}
    />
  );
}

export default GlobalStyles;
