import styles from './Profile.module.sass'

function ProfileTemplate({userData}) {
    return (
        <div className={styles.wrapper}>
            <aside className={styles.sidebar}>
                Sidebar
            </aside>
            <div className={styles.content}>
                {userData.fullName}
            </div>
        </div>
    )
}

export default ProfileTemplate