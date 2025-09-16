import logo from '../../images/logo.png';
import { IoIosSpeedometer } from "react-icons/io";
import { PiUsersLight } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { IoCheckboxOutline } from "react-icons/io5";
import { GrDocumentTime } from "react-icons/gr";

import {
  SideBarWrapper,
  LogoContainer,
  Logo,
  Header,
  List,
  ListItemLink,
  SectionTitle,
  BrandWhite,
  BrandBlue
} from './styles';

import { Column } from './../container/styles';

function SideBar() {
  return (
    <SideBarWrapper>
      <Column>
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
          <Header>
            <BrandWhite>Teach</BrandWhite>
            <BrandBlue>Sync</BrandBlue>
          </Header>
        </LogoContainer>

        <List>
          <SectionTitle>PRINCIPAL</SectionTitle>
          <li>
            <ListItemLink to="/dashboard">
              <IoIosSpeedometer className="navIcon" />
              Dashboard
            </ListItemLink>
          </li>
          <li>
            <ListItemLink to="/analytics">
              <GrDocumentTime className="navIcon" />
              Analytics
            </ListItemLink>
          </li>

          <SectionTitle>GESTÃO</SectionTitle>
          <li>
            <ListItemLink to="/alunos">
              <PiUsersLight className="navIcon" />
              Alunos
            </ListItemLink>
          </li>
          <li>
            <ListItemLink to="/discipline"> 
              <IoBookOutline className="navIcon" />
              Disciplinas
            </ListItemLink>
          </li>
          <li>
            <ListItemLink to="/aulas">
              <LuCalendarCheck className="navIcon" />
              Aulas
            </ListItemLink>
          </li>
          <li>
            <ListItemLink to="/inscricao">
              <IoCheckboxOutline className="navIcon" />
              Inscrição
            </ListItemLink>
          </li>

          <SectionTitle>SISTEMA</SectionTitle>
          <li>
            <ListItemLink to="/disponibilidade">
              <GrDocumentTime className="navIcon" />
              Disponibilidade
            </ListItemLink>
          </li>
          <li>
            <ListItemLink to="/configuracoes">
              <GrDocumentTime className="navIcon" />
              Configurações
            </ListItemLink>
          </li>
        </List>
      </Column>
    </SideBarWrapper>
  );
}

export default SideBar;
