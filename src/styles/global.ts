import { createGlobalStyle } from 'styled-components';

const style = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: 'Nunito', sans-serif
  }

  .content {
    margin: 0 auto;
    margin-top: 80px;
    padding: 30px;
    max-width: 1000px;
    height: 100%;
    display: flex;
    /* background: #FFF; */
    align-self: center;
  }
`;

export default style;