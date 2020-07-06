import React from 'react';
import { FiGithub, FiLinkedin, FiFacebook, FiPhone } from 'react-icons/fi';

import { Container } from './styles';
import profile from '../../assets/matheus.jpg';

interface Props {
  toogleTheme(): void;
}

const Profile: React.FC<Props> = () => {

  return (
    <Container>
      {/* START SECTION PROFILE */}
      <div className="profile">
        <div className="profile-image">
          <img src={profile} alt="Matheus Carvalho"/>

          <div className="profile-socials">
            <a href="https://www.linkedin.com/in/matheus-carvalho-83a68016a/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin size={20} />
            </a>
            <a href="https://github.com/matheuscarvalho23" target="_blank" rel="noopener noreferrer">
              <FiGithub size={20} />
            </a>
            <a href="https://www.facebook.com/matheus.h.carvalho/" target="_blank" rel="noopener noreferrer">
              <FiFacebook size={20} />
            </a>
            <a href="tel:+5515998505117" target="_blank" rel="noopener noreferrer">
              <FiPhone size={20} />
            </a>
          </div>
        </div>

        <div className="profile-bio">
          <p>
            Desenvolvedor Web desde Junho de 2019. Atuo como fullstack na empresa <a href="https://www.linkedin.com/company/m2ntecnologia/" target="_blank" rel="noopener noreferrer" >M2N.</a> Consumo e desenvolvimento de API's. Algumas linguagens e ferramentas de trabalho:
          </p>

          <ul className="profile-skills">
            <li className="profile-skill-title">PHP</li>
            <li className="profile-skill-title">HTML</li>
            <li className="profile-skill-title">CSS</li>
            <li className="profile-skill-title">JAVASCRIPT</li>
            <li className="profile-skill-title">VUE JS</li>
            <li className="profile-skill-title">MYSQL</li>
            <li className="profile-skill-title">CODEIGNITER</li>
          </ul><br/>

          <p>
            Atualmente estudo em páginas SPA, consumo e desenvolvimento de API's usando as ferramentas e linguagens:
          </p>

          <ul className="profile-skills">
            <li className="profile-skill-title">NODE JS</li>
            <li className="profile-skill-title">REACT JS</li>
            <li className="profile-skill-title">REACT N</li>
            <li className="profile-skill-title">JAVASCRIPT</li>
          </ul>

        </div>
      </div>
      {/* END SECTION PROFILE */}
    </Container>
  );
};

export default Profile;