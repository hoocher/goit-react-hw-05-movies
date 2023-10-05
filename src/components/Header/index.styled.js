import { styled } from 'styled-components';

export const NavUnlisted = styled.ul`
  display: flex;
  margin-bottom: 20px;
  a {
    text-decoration: none;
  }

  li {
    color: gray;
    margin: 0 0.8rem;
    font-size: 24px;
    list-style: none;
  }

  .active {
    li {
      border-bottom: 2px solid black;
    }
  }
`;
