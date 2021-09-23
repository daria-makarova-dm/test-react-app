import styles from './Profile.module.sass'
import UserStatus from './UserStatus/UserStatus'

function ProfileTemplate({name, mainPhoto}) {
    return (
        <div className={styles.wrapper}>
            <aside className={styles.sidebar}>
                <div className={styles.infoBlock}>
                    <div className={styles.mainPhoto}>
                        <img src={mainPhoto} alt='' />
                    </div>
                    <div className={styles.name}>{name}</div>
                </div>
                <div className={styles.infoBlock}>
                    <UserStatus />
                </div>
            </aside>
            <div className={styles.content}>
                
            </div>
        </div>
    )
}

export default ProfileTemplate