import React, { Component } from "react";
import "./BaseLayout.css";
import { connect } from "react-redux";


class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }

    convertDay() {
        var day = "";
        switch (new Date().getDay()) {
            case 0:
                day = "Sunday ";
                break;
            case 1:
                day = "Monday ";
                break;
            case 2:
                day = "Tuesday ";
                break;
            case 3:
                day = "Wednesday ";
                break;
            case 4:
                day = "Thursday ";
                break;
            case 5:
                day = "Friday ";
                break;
            case 6:
                day = "Saturday ";
                break;
            default:
                break;
        }
        return day;
    }

    setWelcome() {
        if (localStorage.username !== undefined || null) {
            return "Welcome " + localStorage.username
        } else {
            return "Please log in"
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }
    
    render() {
        var curDay = this.convertDay()
        var msg = this.setWelcome()
        return (
            <>
                <div className="App-status">
                    <p>{msg}</p>
                    <p>{curDay}{this.state.time}</p>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        time: state.time
    }
}

export default connect(mapStateToProps)(Status)