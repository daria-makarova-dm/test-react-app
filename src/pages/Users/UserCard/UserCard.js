import { connect } from "react-redux"
import UserCardTemplate from "./UserCardTemplate"
import { follow, unfollow } from '../../../redux/users-reducer'

function UserCard(props) {

    const onFollowButtonClick = (id, isFollowed) => {
        if (!isFollowed) {
            props.follow(id);
          } else {
            props.unfollow(id);
          }
    }

    return <UserCardTemplate 
        {...props} 
        onFollowButtonClick={onFollowButtonClick}
    />
}

let mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, { follow, unfollow })(UserCard)