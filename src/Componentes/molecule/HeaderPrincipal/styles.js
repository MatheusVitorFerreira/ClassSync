import styled from 'styled-components';

export const TopBarWrapper = styled.div`
  width: 90%;
  height: 100px;
  padding: 0 20px;
  margin-top: 40px;
`;

export const TopBar = styled.div`
  font-family: 'Inter', sans-serif;
  background-color: #ffffff; 
  width: 100%;
  border-radius: 0 0 12px 12px; 
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08); 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px; 
`;

export const TopBarTitle = styled.h1`
  font-size: 25px; 
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;

  label {
    margin: 0;
  }

  strong {
    font-weight: 600;
  }
`;

export const LogoutButton = styled.button`
  background-color: #E5E7EB;
  border: none;
  border-radius: 6px;
  padding: 5px 12px;
  font-size: 13px;
  font-weight: 600;
  color: #111827;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #D1D5DB;
  }
`;
