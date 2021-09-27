import styles from './UserCard.module.sass'
import defaultPhoto from '../../../assets/images/default_profile_pic.jpg'
import { NavLink } from 'react-router-dom'

function UserCardTemplate({photo, name, followed, status, userId, onFollowButtonClick, followingInProgress}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.header}>
                <NavLink to={'/profile/' + userId} className={styles.photo}>
                    <img src={photo || defaultPhoto} alt='' />
                </NavLink>
                <span className={styles.name}>{name}</span>
                </div>
                <div className={styles.body}>
                    {status || 'There is no information about this user '}
                </div>
                <div className={styles.footer}>
                    <button className='btn btn-primary' disabled={followingInProgress.some(id => id === userId)} onClick={() => { onFollowButtonClick(userId, followed) }}>
                        {followed ?
                            'Unfollow' :
                            'Follow'
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserCardTemplate