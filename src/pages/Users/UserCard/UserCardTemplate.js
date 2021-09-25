import styles from './UserCard.module.sass'
import defaultPhoto from '../../../assets/images/default_profile_pic.jpg'

function UserCardTemplate({photo, name, followed, status}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <div className={styles.photo}><img src={photo || defaultPhoto} alt='' /></div>
                    <span className={styles.name}>{name}</span>
                </div>
                <div className={styles.body}>
                    {status || 'There is no information about this user '}
                </div>
                <div className={styles.footer}>
                    <button>Follow</button>
                </div>
            </div>
        </div>
    )
}

export default UserCardTemplate