import { Card, Title, Subtitle, Footer, Badge } from './styles';
import { FaCircle } from "react-icons/fa"; 

function CardItem({ title, subtitle, time, students, status }) {
  const colors = {
    active: { dot: "#007bff", bg: "#e9f3ff" },   
    inactive: { dot: "#dc3545", bg: "#ffe9e9" }, 
  };

  const { dot, bg } = colors[status] || colors.active;

  return (
    <Card bg={bg} border={dot}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Subtitle>{time}</Subtitle>
      <Footer>
        <Badge>;.,
          <FaCircle color={dot} size={10} style={{ marginRight: 5 }} />
          {students} alunos
        </Badge>
      </Footer>
    </Card>
  );
}

export default CardItem;
