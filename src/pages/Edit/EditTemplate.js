import 'simplebar'
import styles from './Edit.module.sass'
import EditProfileForm from './EditProfileForm/EditProfileForm'

function EditTemplate() {
    return (
        <div className={styles.wrapper} data-simplebar style={{ maxHeight: '100%' }}>
            <div className={styles.container}>
                <div className={styles.heading}>Edit Profile</div>
                <EditProfileForm />
            </div>
        </div>
    )
}

export default EditTemplate