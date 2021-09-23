import { connect } from "react-redux"
import ContentBlockTemplate from "./ContentBlockTemplate"

function ContentBlock(props) {

    return <ContentBlockTemplate
        type={props.type}
        aboutMe={props.aboutMe}
        jobHuntingStatus={props.jobHuntingStatus}
        specialSkills={props.specialSkills}
        contacts={props.contacts}
    />
}

let mapStateToProps = (state) => {
    return {
        aboutMe: state.user.aboutMe,
        jobHuntingStatus: state.user.lookingForAJob,
        specialSkills: state.user.lookingForAJobDescription,
        contacts: state.user.contacts
    }
}

export default connect(mapStateToProps, {})(ContentBlock)