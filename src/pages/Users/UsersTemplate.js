import 'simplebar'
import UserCard from './UserCard/UserCard'
import styles from './Users.module.sass'

function UsersTemplate({usersList}) {
    return (
        <div className={styles.wrapper + ' usersGrid'} data-simplebar style={{ maxHeight: '100%' }}>
            {usersList.map((u) => {
                return <UserCard
                    key={u.id}
                    photo={u.photos.small}
                    name={u.name}
                    status={u.status}
                    followed={u.followed}
                />
            })}
        </div>
    )
}

export default UsersTemplate