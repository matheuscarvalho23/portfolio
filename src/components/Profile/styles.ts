import styled from 'styled-components';

export const Container = styled.div`

  .profile {
    display: flex;
    justify-content: space-between;
  }

  .profile-image img {
    width: 300px;
    height: 300px;
    border: 4px solid ${props => props.theme.colors.border};
    border-radius: 150px;
  }

  .profile-socials {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 0 auto;
    max-width: 150px;
  }

  .profile-socials a {
    color: ${props => props.theme.colors.icons};
  }

  .profile-bio {
    margin: 50px;
    font-size: 18px;
  }

  .profile-bio a {
    text-decoration: none;
    color: ${props => props.theme.colors.links};
  }

  .profile-skills {
    padding-top: 10px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    list-style: none;
  }

  .profile-skill-title {
    background: ${props => props.theme.colors.primary};
    padding: 5px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0,1,2,0.06);
    font-size: 12px;
    color: ${props => props.theme.colors.textSpan};
  }

  @media (max-width: 900px) {
    .content {
      margin: 30px;
    }

    .profile {
      flex-wrap: wrap;
    }

    .profile-image {
      margin: 0 auto;
    }

    .profile-image img {
      width: 200px;
      height: 200px;
    }

    .profile-skills {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
    }

    .profile-skill-title {
      margin: 5px;
    }
  }
`;