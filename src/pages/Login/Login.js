import { connect } from "react-redux";
import { compose } from "redux";
import LoginTemplate from "./LoginTemplate";
import { logIn } from '../../redux/auth-reducer'

function Login(props) {

    const onSubmit = (logInData) => {
        props.logIn(logInData)
    }

    return (
        <LoginTemplate
            onSubmit={onSubmit}
            captchaURL={props.captchaURL}
            errorMessage={props.errorMessage}
         />
    );

}

let mapStateToProps = (state) => {
    return {
        captchaURL: state.auth.captchaURL,
        errorMessage: state.auth.error
    }
}

export default compose(
    connect(mapStateToProps, {logIn})
)(Login);