import styled from "styled-components";

export const CartSection = styled.section`
  width: 100%;
  max-width: 330px;
  background-color: white;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  padding: 100px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(110%, 0);
  transition: all 400ms ease;

  .cart-item:last-child {
    border-bottom: none;
  }

  .cart--active {
    transform: translate(0, 0);
  }
`;

export const CartItems = styled.div`
  flex-grow: 1;
  overflow: auto;
  border-bottom: none;
`;

export const ButtonCheckout = styled.button`
  border: none;
  background-color: rgb(39, 151, 202);
  height: 40px;
  color: #000000;
  font-size: 18px;
  border-radius: 18px;
  cursor: pointer;
`;

export const CartResume = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  padding: 35px 0 15px;
  border-top: 1px solid #ddd;
`;
