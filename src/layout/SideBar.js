import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';
import Container from './Container';
import { IoIosSpeedometer } from "react-icons/io";
import { PiUsersLight } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { IoCheckboxOutline } from "react-icons/io5";
import { GrDocumentTime } from "react-icons/gr";


import logo from '../images/logo.png';

function SideBar() {
    return (
        <nav className={styles.sideBar}>
            <Container customClass="colum">
                <div className={styles.logoContainer}>
                    <h2 className={styles.header}>ClassSync</h2>
                    <img src={logo} className={styles.logo} alt="Logo" />
                </div>
                <ul className={styles.list}>
                    <li>
                        <Link to="/dashboard">
                            <IoIosSpeedometer className={styles.navIcon} />Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link to="/usuarios">
                            <PiUsersLight  className={styles.navIcon} />Usuários
                        </Link>
                    </li>
                    <li>
                        <Link to="/disciplinas">
                            <IoBookOutline  className={styles.navIcon} />Disciplinas
                        </Link>
                    </li>
                    <li>
                        <Link to="/aulas">
                            <LuCalendarCheck  className={styles.navIcon} />Aulas
                        </Link>
                    </li>
                    <li>
                        <Link to="/inscricao">
                            <IoCheckboxOutline  className={styles.navIcon} />Inscrição
                        </Link>
                    </li>
                    <li>
                        <Link to="/disponibilidade">
                            <GrDocumentTime  className={styles.navIcon} />Disponibilidade
                        </Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default SideBar;
