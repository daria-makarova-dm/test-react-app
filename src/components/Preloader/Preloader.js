import styles from './Preloader.module.sass'

function Preloader() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.spinner}></div>
        </div>
    )
}

export default Preloader;