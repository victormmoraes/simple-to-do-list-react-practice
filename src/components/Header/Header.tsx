import toDoLogoImg from '../../assets/toDoLogo.svg'
import styles from './Header.module.css';

export function Header() {
    return (
        <div className={styles.header}>
            <img src={toDoLogoImg} alt="to do" />
        </div>
    )
}