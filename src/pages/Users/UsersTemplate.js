import 'simplebar'
import Pagination from '../../components/Pagination/Pagination'
import UserCard from './UserCard/UserCard'
import styles from './Users.module.sass'

function UsersTemplate({usersList, followingInProgress, currentPage, onPageChange, totalUsersCount, pageSize, portionNumber, setPortionNumber}) {
    return (
        <div className={styles.wrapper + ' users'} data-simplebar style={{ maxHeight: '100%' }}>
            <div className={styles.inner}>
                <div className={styles.usersList}>
                    {usersList.map((u) => {
                        return <UserCard
                            key={u.id}
                            userId={u.id}
                            photo={u.photos.small}
                            name={u.name}
                            status={u.status}
                            followed={u.followed}
                            followingInProgress={followingInProgress}
                        />
                    })}
                </div>
                
                <Pagination 
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    portionNumber={portionNumber}
                    setPortionNumber={setPortionNumber}
                />
            </div>
        </div>
    )
}

export default UsersTemplate