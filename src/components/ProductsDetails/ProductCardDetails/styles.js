import styled from "styled-components";

export const ProductDescription = styled.section`
  width: 100%;
  max-width: 1100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  margin-top: 15px;

  :hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const CardImage = styled.img`
  width: 400px;
  height: 400px;
`;

export const CardInfo = styled.div`
  padding: 20px;
  border-top: 1px solid #ddd;
`;

export const CardInfos = styled.div`
  padding: 20px;
  border-top: 1px solid #ddd;
`;

export const CardPrice = styled.h2`
  font-size: 30px;
  font-weight: 400;
  position: relative;
  bottom: 0;
  padding: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  bottom: 0;
  color: #000000;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  color: #000000;
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const CardDescription = styled.h2`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 20px;
  justify-content: end;
  align-items: end;
  text-align: justify;
`;

export const ButtonProduct = styled.button`
  margin: 12px 15px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const ButtonAddCard = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45px;
  height: 45px;
  margin: 12px 15px;
  color: #0c5dd6;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ButtonAddFavorite = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45px;
  height: 45px;
  margin: 12px 55px;
  color: #d60c0c;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  cursor: pointer;
`;
