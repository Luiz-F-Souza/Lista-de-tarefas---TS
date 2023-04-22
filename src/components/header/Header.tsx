import styles from "./Header.module.css"
import logoPath from "../../assets/logo.svg"

function Header() {
  return (
    <header className={styles.header}>
        <img className={styles.logo} src={logoPath} alt="logo do site todo-list. Foguete ao lado do nome todo" />
    </header>
  )
}

export  { Header }