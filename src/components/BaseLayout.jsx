import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./BaseLayout.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import OCC from "../occ.jpeg";
import Status from "./Status";

class Menu extends Component {
    cleanStorage() {
        localStorage.removeItem("username");
        localStorage.removeItem("hygiene");
        localStorage.removeItem("boyclothing");
        localStorage.removeItem("girlclothing");
        localStorage.removeItem("shoes");
        localStorage.removeItem("boytoys");
        localStorage.removeItem("girltoys");
        localStorage.removeItem("paper");
        localStorage.removeItem("writing");
        localStorage.removeItem("craft");
    }

    handleLogoutClick = () => {
        this.cleanStorage();
        this.props.logout();
        this.props.history.push("/");
    }

    render() {
        return (
            <>
                <ul className="menu">
                    <img className="site-pic" src={OCC} alt="site-pic" />
                    <h3>Rhonda's Operation Christmas Child</h3>
                    <li className="Text"><NavLink to="/">Home</NavLink></li>
                    <li className="Text"><NavLink to="/logon">Logon</NavLink></li>
                    <li><button onClick={this.handleLogoutClick}>Logout</button></li>
                </ul>
                <Status />
            </>
        )
    }
}

export class Footer extends Component {
    render() {
        var curYear = new Date().getFullYear()
        var footerString = "© Copyright " + curYear.toString() + " TSM Software, Inc."
        return (
            <div className="footer">
                <span className="Text">{footerString}</span>
            </div>
        )
    }
}

export class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Menu isAuthenticated={this.props.isAuthenticated} logout={this.props.onLogout} history={this.props.history} />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAutheticated: state.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch({type: "LOGOUT"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BaseLayout))