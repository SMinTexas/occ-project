import React, {useState} from "react";
import {Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import { setAuthenticationHeader } from "../utils/authenticate";
import "./Logon.css";

export default function Logon(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem("username",username);
        setAuthenticationHeader(username);
        props.history.push("/dashboard");
    }

    return (
        <div className="logon">
            <header className="logon-header">
            <form onSubmit={handleSubmit}>
                    <FormGroup controlId="username" bssize="large">
                        <FormLabel className="form-label-first">Username</FormLabel>
                        <FormControl
                            className="form-control"
                            autoFocus
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </FormGroup>
                    <br />
                    <FormGroup controlId="password" bssize="large">
                        <FormLabel className="form-label-second">Password</FormLabel>
                        <FormControl
                            className="form-control"
                            value={password}
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Button 
                        className="button-control"
                        block 
                        size="lg"
                        variant="outline-primary"
                        disabled={!validateForm()} 
                        type="submit"
                    >
                        Logon
                    </Button>
                    <hr />
                    <p className="register-message">
                        Need an account?  Please register for a new account.
                    </p>
                    <Button
                        className="button-control"
                        block
                        size="lg"
                        variant="outline-primary"
                        type="submit"
                    >
                        Register
                    </Button>
                </form>
            </header>
        </div>
    )
}









// import React, { Component } from "react";
// import { connect } from "react-redux";
// import axios from "axios";
// import { setAuthenticationHeader } from "../utils/authenticate";
// import { withRouter } from "react-router";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

// class Logon extends Component {
//     constructor(props) {
//         super(props);
//         this.onLogout = this.handleLogonClick.bind(this);
//         this.state = {
//             email: "",
//             password: ""
//         }
//     }

//     handleTextBoxChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleLogonClick = () => {
//         axios.post("http://localhost:3000/logon",{
//             email: this.state.email,
//             password: this.state.password
//         }).then(response => {
//             let token = response.data.token 
//             localStorage.setItem("webtoken", token)
//             this.props.onAuthenticated(token)
//             setAuthenticationHeader(token)
//             this.props.history.push("/dashboard")
//         }).catch(error => console.log(error))
//     }

//     render() {
//         return (
//             <div className="logon">
//                 {/* <form onSubmit={this.handleLogonClick}>
//                     <FormGroup controlId="email" bsSize="large">
//                         <ControlLabel>E-Mail</ControlLabel>
//                         <FormControl
//                             autoFocus
//                             type="email"
//                             value={email}
//                             onChange={this.handleTextBoxChange}
//                         />
//                     </FormGroup>
//                     <FormGroup controlId="password" bsSize="large">
//                         <ControlLabel>Password</ControlLabel>
//                         <FormControl
//                             value={password}
//                             onChange={this.handleTextBoxChange}
//                         />
//                     </FormGroup>
//                     <Button block bsSize="large" type="submit">Logon</Button>
//                 </form> */}
//                 <input 
//                     name="email" 
//                     onChange={this.handleTextBoxChange} 
//                     placeholder="E-Mail">
//                 </input>
//                 <input 
//                     name="password" 
//                     type="password" 
//                     onChange={this.handleTextBoxChange} 
//                     placeholder="Password">
//                 </input>
//                 <button onClick={this.handleLogonClick}>Logon</button>
//             </div>
//         )
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAuthenticated: (token) => dispatch({type: "ON_AUTHENTICATED", token: token})
//     }
// }

// export default connect(null, mapDispatchToProps)(withRouter(Logon))