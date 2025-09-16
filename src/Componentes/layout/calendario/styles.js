import styled from "styled-components";
import Calendar from "react-calendar";

export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 720px;
  height: auto;
  border-radius: 12px;
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  font-family: "Inter", sans-serif;
  overflow: hidden;
  margin-top: 0; 
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  min-height: 64px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #111827;

  svg {
    font-size: 24px;
    color: #000;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #0c46bbb8;
  padding-left: 34px;
`;

/* Customização do calendário */
export const CustomCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

  /* Cabeçalho do mês */
  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    height: 56px;
    font-size: 16px;
    font-weight: 600;
    color: #374151;
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
  }

  .react-calendar__navigation button {
    background: none;
    border: none;
    color: #374151;
    font-size: 18px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 6px;
  }

  .react-calendar__navigation button:hover {
    background: #f3f4f6;
  }

  /* Dias da semana */
  .react-calendar__month-view__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    padding: 8px 0;
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    color: #6b7280;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  /* Grade dos dias */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 55px;  /* menor altura (antes era 70px) */
    text-align: center;
  }

  /* Estilo dos dias */
  .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    font-size: 14px;
    background: #fff;
    transition: all 0.2s;
    position: relative;
  }

  /* Dia selecionado */
  .react-calendar__tile--active::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 36px;
    height: 36px;
    background: #2563eb;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  /* Hoje */
  .react-calendar__tile--now {
    border: 1px solid #eff6ff !important;
    font-weight: 700;
    background: #f6ef31ff !important;
  }

  /* Dias fora do mês */
  .react-calendar__month-view__days .react-calendar__tile--neighboringMonth {
    color: #cbd5e1;
  }

  /* Domingos em vermelho */
  .react-calendar__month-view__days__day--weekend {
    color: #dc2626;
  }
`;
