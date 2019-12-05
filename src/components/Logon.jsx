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

    function setStorage() {
        if (localStorage.registered === "true") {
            localStorage.setItem("username", username);
            localStorage.setItem("hygiene", 383);
            localStorage.setItem("boyclothing", 56);
            localStorage.setItem("girlclothing", 126);
            localStorage.setItem("shoes", 47);
            localStorage.setItem("boytoys", 59);
            localStorage.setItem("girltoys", 23);
            localStorage.setItem("paper", 695);
            localStorage.setItem("writing", 2593);
            localStorage.setItem("craft", 1540);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (localStorage.registered !== undefined || null) {
            setStorage();
            setAuthenticationHeader(username);
            props.history.push("/dashboard");
        } else {
            props.history.push("/register");
        }

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