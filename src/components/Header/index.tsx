import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

interface Props {
  toogleTheme(): void;
}

const Header: React.FC<Props> = ({ toogleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <p className="logo">Matheus Carvalho</p>

      <div className="dark-mode">
        <p>Dark mode</p>
        <Switch
          onChange={toogleTheme}
          checked={title==='dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor="#48D06D"
          offColor={shade(0.5, '#48D06D')}
        />
      </div>
    </Container>
  );
};

export default Header;