import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>blog.Apiki</h1>
        <nav>
          <Link href="/">
            <a >Home</a>
          </Link>
          <Link href="/posts" prefetch>
            <a >Post</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
