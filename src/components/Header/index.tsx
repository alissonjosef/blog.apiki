import styles from './styles.module.scss'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1>blog.news</h1>
                <nav>
                    <a href="">Home</a>
                    <a href="">Post</a>
                </nav>
            </div>
        </header>
    )
}