import { connect } from "react-redux"
import UserCardTemplate from "./UserCardTemplate"

function UserCard(props) {

    return <UserCardTemplate {...props} />
}

let mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {  })(UserCard)