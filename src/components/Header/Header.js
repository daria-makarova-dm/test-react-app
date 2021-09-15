import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import HeaderTemplate from "./HeaderTemplate";

function Header(props) {

    let [isOpened, toggleOpening] = useState(false);

    const rootEl = useRef(null);

    useEffect(() => {
        const onClick = e => rootEl.current.contains(e.target) || toggleOpening(false);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    const onMenuClick = () => {
        toggleOpening(!isOpened)
    } 

    return <HeaderTemplate
        authUserID={props.authUserID}
        rootEl={rootEl}
        isOpened={isOpened}
        onMenuClick={onMenuClick} />
}

let mapStateToProps = (state) => ({
    authUserID: state.auth.id
});

export default compose(
    connect(mapStateToProps, {})
)(Header);
