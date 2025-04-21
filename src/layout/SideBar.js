import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';
import Container from './Container';
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
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/usuarios">Usuários</Link>
                    </li>
                    <li>
                        <Link to="/disciplinas">Disciplinas</Link>
                    </li>
                    <li>
                        <Link to="/aulas">Aulas</Link>
                    </li>
                    <li>
                        <Link to="/inscricao">Inscrição</Link>
                    </li>
                    <li>
                        <Link to="/disponibilidade">Disponibilidade</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default SideBar;
