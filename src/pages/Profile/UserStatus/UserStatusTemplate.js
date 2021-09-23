import styles from './UserStatus.module.sass'

function UserStatusTemplate({ userStatus, newStatus, enableEditMode, disableEditMode, onStatusChange, editMode }) {

    return (
        <div className={styles.wrapper}>

            {!editMode &&
                <span onClick={() => enableEditMode()}>
                    {userStatus || 'Enter your status...'}
                </span>
            }
            {editMode &&
                <>
                    <input autoFocus onBlur={() => disableEditMode()} onChange={(e) => onStatusChange(e)} value={newStatus} placeholder='Enter your status...' />
                </>
            }
        </div>
    )
}

export default UserStatusTemplate