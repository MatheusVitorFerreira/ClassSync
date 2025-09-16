import styled from "styled-components";

export const DashboardContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; 
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;
`;


export const ProximasAulasWrapper = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  height: fit-content; /* acompanha conteúdo sem ficar esmagado */
`;