import styled from "styled-components";

export const ProductCard = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 auto;
  position: relative;

  :hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const CardImage = styled.img`
  width: 230px;
  height: 230px;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const CardInfos = styled.div`
  padding: 20px;
  border-top: 1px solid #ddd;
`;

export const CardPrice = styled.h2`
  font-size: 30px;
  font-weight: 400;
  display: block;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h2`
  font-size: 17px;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.5;
  font-weight: 500;
`;

export const ButtonProduct = styled.button`
  margin: 12px 15px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
`;

export const ButtonAddCard = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  margin: 12px 15px;
  color: #0c5dd6;
  display: none;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
`;

export const ButtonAddFavorite = styled.button`
  position: absolute;
  top: 10;
  right: 0;
  width: 45px;
  height: 45px;
  margin: 61px 15px;
  color: #d60c0c;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
`;
