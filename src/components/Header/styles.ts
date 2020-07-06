import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  .logo {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    letter-spacing: -0.02em;
	  line-height: 75%;
	  text-shadow: 0px 2px 3px #555;
  }

  .dark-mode {
    display: flex;
    align-items: center;
  }

  .dark-mode p {
    padding: 10px;
  }

`;
