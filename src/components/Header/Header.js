import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import HeaderTemplate from "./HeaderTemplate";
import { logOut } from '../../redux/auth-reducer'
import Preloader from "../Preloader/Preloader";

function Header(props) {

    let [isOpened, toggleOpening] = useState(false);


    const rootEl = useRef(null);

    useEffect(() => {

        const onClick = e => rootEl.current.contains(e.target) || toggleOpening(false);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    });

    const onMenuClick = () => {
        toggleOpening(!isOpened)
    }

    const onLogOut = (e) => {
        e.preventDefault()
        props.logOut()
    }

    if (props.authUserProfileData === null) {
       return <Preloader />
    }

    return <HeaderTemplate
        authUserID={props.authUserID}
        rootEl={rootEl}
        isOpened={isOpened}
        onMenuClick={onMenuClick}
        onLogOut={onLogOut}
        authUserData={props.authUserProfileData} />

}

let mapStateToProps = (state) => ({
    authUserID: state.auth.id,
    authUserProfileData: state.auth.authUserData
});

export default compose(
    connect(mapStateToProps, {logOut})
)(Header);
