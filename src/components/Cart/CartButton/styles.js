import styled from "styled-components";

export const ButtonCart = styled.button`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  margin-left: 20px;
`;

export const Name = styled.div`
  font-size: 18px;
  margin: 0px 18px 0px 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
`;

export const CartStatus = styled.span`
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
