import { connect } from "react-redux"
import EditProfileFormTemplate from "./EditProfileFormTemplate"
import { editProfile } from '../../../redux/user-reducer'

function EditProfileForm(props) {

    const onSubmit = (data) => {
        props.editProfile(data)
    }

    return <EditProfileFormTemplate
        onSubmit={onSubmit}
        {...props.profileData}
        errorMessage={props.errorMessage}
    />
}

let mapStateToProps = (state) => {
    return {
        profileData: state.auth.authUserData,
        errorMessage: state.user.errorMessage
    }
}

export default connect(mapStateToProps, {editProfile, })(EditProfileForm)