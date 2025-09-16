
import styled from "styled-components";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; 
  margin: 10px auto 50px auto;
`;
export const CardBox = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px; /* menor que antes */
  gap: 15px; /* ajusta o espaço interno */
  height: 90px; /* menor */
  border-left: 6px solid ${({ color }) => color || "#ccc"};
`;

export const IconWrapper = styled.div`
  background: ${({ color }) => color || "#ccc"};
  color: #fff;
  border-radius: 50%;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 6px;
`;

export const Value = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  margin: 0;
`;

export const ExtraInfo = styled.p`
  font-size: 0.8rem;
  margin-top: 4px;
  color: ${({ positivo, negativo }) =>
    positivo ? "#10b981" : negativo ? "#ef4444" : "#6b7280"};
`;
