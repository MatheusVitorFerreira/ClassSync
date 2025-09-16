import styled from "styled-components";

export const ProximasAulasWrapper = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  max-width: 360px;  /* largura máxima */
  width: 100%;
  height: fit-content; 
`;
export const ProximasAulasHeader = styled.div`
  background: #273242;
  color: white;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.3px;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

export const AulasContent = styled.div`
  flex: 1;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  flex-shrink: 0;
`;

export const PaginationDot = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.active ? "#3b82f6" : "#f1f5f9")};
  color: ${(props) => (props.active ? "white" : "#475569")};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  &:hover {
    background: ${(props) => (props.active ? "#2563eb" : "#e2e8f0")};
  }
`;
