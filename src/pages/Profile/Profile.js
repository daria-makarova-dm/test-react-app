import styles from './Profile.module.sass'

let Profile = () => {
    return (
        <div className={styles.wrapper}>
            <aside className={styles.sidebar}>
                Sidebar
            </aside>
            <div className={styles.content}>
                Profile
            </div>
        </div>
    )
}

export default Profile