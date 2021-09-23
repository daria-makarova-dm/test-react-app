import styles from './Profile.module.sass'
import UserStatus from './UserStatus/UserStatus'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

function ProfileTemplate({name, mainPhoto}) {
    return (
        <div className={styles.wrapper}>
            <aside className={styles.sidebar}>
                <SimpleBar style={{ maxHeight: '100%' }}>
                    <div className={styles.infoBlock}>
                        <div className={styles.mainPhoto}>
                            <img src={mainPhoto} alt='' />
                        </div>
                        <div className={styles.name}>{name}</div>
                    </div>
                    <div className={styles.infoBlock}>
                        <div className={styles.blockHeading}>Status</div>
                        <UserStatus />
                    </div>
                </SimpleBar>
            </aside>
            <div className={styles.content}>
                <SimpleBar style={{ maxHeight: '100%' }}>
                </SimpleBar>
            </div>
        </div>
    )
}

export default ProfileTemplate