import styles from './styles.module.scss'

export function SubButton(){
    return(
        <a
        type="button"
        className={styles.subButton}
        >
            Click here
        </a>
    )
}