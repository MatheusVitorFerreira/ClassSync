import React, { useState, useEffect } from "react";
import axios from "axios";
import InfoCard from "../../molecule/CardBox";
import { FaBook, FaCoins, FaUserCheck, FaUsers } from "react-icons/fa";

import { ContainerSection } from "../../layout/container/styles";
import { CardsGrid } from "../../molecule/CardBox/styles";
import Calendario from "../../layout/calendario";
import LessonsList from "../../molecule/LessonList";
import { BottomGrid } from "./styles";

function DashboardInfoCard() {
  const [stats, setStats] = useState({
    totalScheduledClasses: 0,
    totalScheduledStudentsActive: 0,
    totalStudents: 0,
  });

  const [aulas, setAulas] = useState([]);
  const [date, setDate] = useState(new Date());
  const [aulasDoDia, setAulasDoDia] = useState([]);

  // Busca estatísticas
  useEffect(() => {
    axios
      .get("http://localhost:8080/sistema-agendamento-aula/api/v1/statistics")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Busca aulas
  useEffect(() => {
    axios
      .get("http://localhost:8080/sistema-agendamento-aula/api/v1/schedule-classes")
      .then((res) => setAulas(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Filtra aulas do dia
  useEffect(() => {
    const diaSelecionado = date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const filtradas = aulas.filter((aula) => aula.date === diaSelecionado);

    const aulasFormatadas = filtradas.map((aula) => ({
      title: aula.lesson?.nameLesson,
      subtitle: `Turno: ${aula.lesson?.classShift || "N/A"}`,
      time: `${aula.startTime || "N/A"} até ${aula.endTime || "N/A"}`,
      students: aula.lesson?.students?.length || 0,
      status: aula.lesson?.status === "CONFIRMED" ? "active" : "inactive",
    }));

    setAulasDoDia(aulasFormatadas);
  }, [date, aulas]);

  return (
    <ContainerSection>
      <CardsGrid>
        <InfoCard
          title="Total de Aulas Agendadas"
          value={stats.totalScheduledClasses}
          icon={<FaBook />}
          color="#4e73df"
        />
        <InfoCard
          title="Alunos Ativos"
          value={stats.totalScheduledStudentsActive}
          icon={<FaUserCheck />}
          color="#1cc88a"
        />
        <InfoCard
          title="Total de Alunos"
          value={stats.totalStudents}
          icon={<FaUsers />}
          color="#36b9cc"
        />
        <InfoCard
          title="Receita Mensal"
          value={stats.totalStudents} 
          icon={<FaCoins />}
          color="#eb9a04ed"
        />
      </CardsGrid>
      <BottomGrid>
      <Calendario value={date} onChange={setDate} />
      <LessonsList lessons={aulasDoDia} />
      </BottomGrid>
    </ContainerSection>
  );
}

export default DashboardInfoCard;
