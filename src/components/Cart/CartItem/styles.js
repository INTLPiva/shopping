import styled from "styled-components";

export const Cart = styled.section`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;
  position: relative;
`;

export const CartImage = styled.img`
  width: 70px;
`;

export const CartItemTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 8px;
`;

export const CartItemPrice = styled.h3`
  font-size: 25px;
  font-weight: 500;
`;

export const CartItemContent = styled.div`
  padding: 0 35px 0 10px;
`;

export const ButtonRemoveItem = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: #d83232;
  font-size: 1.4rem;
  border: none;
  background: none;
  cursor: pointer;
`;
