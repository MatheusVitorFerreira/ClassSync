import styled from "styled-components";

export const Card = styled.div`
  background: #ffffffca;
  border-radius: 20px; 
  padding: 24px; /* padding maior */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: all 0.2s;
  cursor: pointer;
  border: 2px solid #e2e8f0;

  &:hover {
    border-color: #273242;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  }
`;
export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
`;

export const Subtitle = styled.span`
  font-size: 0.9rem;
  color: #64748b;
`;

export const Time = styled.span`
  font-size: 0.85rem;
  color: #6b7280;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 0.85rem;
  color: #374151;
`;

export const StudentsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StudentCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #6366f1;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -8px;

  &:first-child {
    margin-left: 0;
  }
`;

export const Badge = styled.span`
  background: #dbeafe;
  color: #2563eb;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
`;
