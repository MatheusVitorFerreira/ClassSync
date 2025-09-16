import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
`;

export const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(600px, 2fr) minmax(280px, 360px); 
  gap: 40px;
  width: 100%;
  align-items: start;
`;
export const Box = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 16px;
  }
`;
