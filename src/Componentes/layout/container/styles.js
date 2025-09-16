import styled, { css } from 'styled-components';

const baseContainer = css`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const ContainerWrapper = styled.div`
  display: flex;       
  width: 100%;
  min-height: 100vh;
`;

export const MinHeight = styled.div`
  min-height: 75vh;
`;

export const Start = styled.div`
  ${baseContainer};
  justify-content: flex-start;
`;

export const Column = styled.div`
  ${baseContainer};
  flex-direction: column;
  justify-content: flex-start;
`;


export const ContainerSection= styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; 
  padding: 20px;
  overflow-y: auto;
  background-color: #F8FAFC; 
`;
