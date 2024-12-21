import styles from "../styles/nav.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/form">Form</a>
        </li>
        <li>
          <a href="/submission">Submission</a>
        </li>
      </ul>
    </nav>
  );
}
