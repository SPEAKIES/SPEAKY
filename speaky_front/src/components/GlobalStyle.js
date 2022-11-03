import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

body {
        font-family: 'Source Sans Pro', sans-serif;
        overflow-x: hidden;

}
    ul, ol {
        list-style: none;
        padding-left: 0px;
}
`;
export default GlobalStyle;
