import styled from "styled-components";

export const HeaderSection = styled.header`
  background-color: rgb(39, 151, 202);
  position: fixed;
  width: 100%;
  z-index: 1;

  a {
    color: #000000;
    text-decoration: none;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  .favoritos {
    font-size: 1.5rem;
    margin: 0px 18px 0px 10px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    position: relative;
  }

  .icon {
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .logout {
    font-size: 2rem;
    margin-left: 24px;
    cursor: pointer;
  }
`;

export const GroupIcon = styled.div`
  display: flex;
`;

export const Name = styled.a`
  font-size: 18px;
  margin: 0px 18px 0px 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
`;

export const FavoriteStatus = styled.span`
  background-color: red;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 11px;
  font-weight: 600;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
