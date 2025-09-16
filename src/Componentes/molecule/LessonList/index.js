import { useState } from "react";
import CardItem from "../CardItem";
import { ProximasAulasWrapper, ProximasAulasHeader, AulasContent, Pagination, PaginationDot } from "./styles";
import { FaStar } from "react-icons/fa";

function LessonsList({ lessons }) {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 2; 

  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const lessonsPaginadas = lessons.slice(inicio, fim);

  const totalPaginas = Math.ceil(lessons.length / itensPorPagina);

  return (
    <ProximasAulasWrapper>
      <ProximasAulasHeader>
        <FaStar /> Próximas Aulas
      </ProximasAulasHeader>

      <AulasContent>
        {lessonsPaginadas.map((lesson, index) => (
          <CardItem
            key={index}
            title={lesson.title}
            subtitle={lesson.subtitle}
            time={lesson.time}
            students={lesson.students}
            status={lesson.status}
          />
        ))}

        {totalPaginas > 1 && (
          <Pagination>
            {Array.from({ length: totalPaginas }, (_, i) => (
              <PaginationDot
                key={i}
                active={paginaAtual === i + 1}
                onClick={() => setPaginaAtual(i + 1)}
              >
                {i + 1}
              </PaginationDot>
            ))}
          </Pagination>
        )}
      </AulasContent>
    </ProximasAulasWrapper>
  );
}

export default LessonsList;
