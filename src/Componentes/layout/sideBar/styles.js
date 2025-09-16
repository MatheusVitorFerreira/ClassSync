import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarWrapper = styled.nav`
  width: 280px; /* Largura ajustada */
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px); 
  border-right: 1px solid rgba(255, 255, 255, 0.12);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const Logo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  padding: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, #4ecdc4, #8b5cf6); 
  box-shadow: 0 8px 25px rgba(78, 205, 196, 0.3);
`;


export const Header = styled.h2`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const BrandWhite = styled.span`
  color: #ffffff;
`;

export const BrandBlue = styled.span`
  color: #3B82F6; 
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ListItemLink = styled(Link)`
  text-decoration: none;
  font-size: 17px; 
  color: #b4b4b4; 
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    color: #ffffff;
    transform: translateX(4px);
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: linear-gradient(135deg, #4ecdc4, #8b5cf6);
    color: white;
    box-shadow: 0 8px 25px rgba(78, 205, 196, 0.25);
    font-weight: 600;
  }
`;

export const SectionTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #b4b4b4;
  margin: 24px 0 12px 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;



export const NavIcon = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color || "#b4b4b4"};
  width: 18px;
  height: 18px;
  filter: none;
  transition: all 0.3s ease;
  
  ${ListItemLink}:hover & {
    color: #ffffff;
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
  }

  ${ListItemLink}.active & {
    color: white;
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
  }
`;