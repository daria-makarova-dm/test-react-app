import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import HeaderTemplate from "./HeaderTemplate";

class Header extends React.Component {
    render() {
        return <HeaderTemplate />;
    }
}

let mapStateToProps = (state) => ({
});

export default compose(
    connect(mapStateToProps, {})
    )(Header);
