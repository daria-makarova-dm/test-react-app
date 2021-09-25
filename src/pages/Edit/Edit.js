import { connect } from "react-redux"
import EditTemplate from "./EditTemplate"

function Edit(props) {

    return <EditTemplate />
}

let mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {  })(Edit)