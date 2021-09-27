import styles from './UserStatus.module.sass'
import 'simplebar';
import 'simplebar/dist/simplebar.min.css'

function UserStatusTemplate({ userStatus, newStatus, enableEditMode, disableEditMode, onStatusChange, editMode, authID, currentUser }) {

    return (
        <div className={styles.wrapper}>

            {!editMode &&
                <span onClick={() => enableEditMode()}>
                    {!userStatus && authID === currentUser ? 'Enter your status...' : userStatus}
                    {!userStatus && authID !== currentUser && 'No status yet...'}
                </span>
            }
            {editMode &&
                <>
                    <input className={styles.input} autoFocus onBlur={() => disableEditMode()} onChange={(e) => onStatusChange(e)} value={newStatus} placeholder='Enter your status...' />
                </>
            }
        </div>
    )
}

export default UserStatusTemplate