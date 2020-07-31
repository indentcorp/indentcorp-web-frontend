import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
    }
    label{
        padding: 0;
    }
    #root{
        width: 100%;
        height:100%;
    }
    html{
        overflow-x:hidden;
    }
    body{
        margin: 0px;
        padding: 0px;
        height: 100vh;
        font-family: 'Noto Sans KR', sans-serif;
        color: black;
        overflow-x: hidden;
        /* box-sizing: border-box; */
    }

`;

export default GlobalStyles;
