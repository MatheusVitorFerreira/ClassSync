import React from "react";
import "react-calendar/dist/Calendar.css"; // mantém a estrutura base, vamos sobrescrever estilos
import { 
  CalendarWrapper, 
  TopBar, 
  Title, 
  Subtitle, 
  CustomCalendar, 
  TitleWrapper 
} from "./styles";
import { SlCalender } from "react-icons/sl";

function Calendario({ value, onChange }) {
  return (
    <CalendarWrapper>
      <TopBar>
        <TitleWrapper>
          <Title>
            <SlCalender />
            Calendário de Aulas
          </Title>
          <Subtitle>Clique em uma data para conferir sua programação</Subtitle>
        </TitleWrapper>
      </TopBar>

       <CustomCalendar
        onChange={onChange}
        value={value}
        locale="pt-BR"
        calendarType="gregory"
        prevLabel="❮"
        nextLabel="❯"
        prev2Label={null}
        next2Label={null}
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString(locale, { weekday: "short" }).toUpperCase()
        }
      />
    </CalendarWrapper>
  );
}

export default Calendario;
