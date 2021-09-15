import styles from './Profile.module.sass'

function ProfileTemplate() {
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

export default ProfileTemplate