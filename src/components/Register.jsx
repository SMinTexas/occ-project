import React, {useState} from "react";
import {Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import "./Register.css";

export default function Register(props) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && email.length > 0 && password.length > 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem("registered",true);
        props.history.push("/logon");
    }

    return (
        <div className="register">
            <header className="register-header">
            <form onSubmit={handleSubmit}>
                    <FormGroup controlId="username" bssize="large">
                        <FormLabel className="register-form-label-first">Username</FormLabel>
                        <FormControl
                            className="register-form-control"
                            autoFocus
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </FormGroup>
                    <br />
                    <FormGroup controlId="email" bssize="large">
                        <FormLabel className="register-form-label-second">E-Mail</FormLabel>
                        <FormControl
                            className="register-form-control"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <br />
                    <FormGroup controlId="password" bssize="large">
                        <FormLabel className="register-form-label-third">Password</FormLabel>
                        <FormControl
                            className="register-form-control"
                            value={password}
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <hr />
                    <Button
                        className="register-button-control"
                        block
                        size="lg"
                        variant="outline-primary"
                        type="submit"
                        disabled={!validateForm()} 
                    >
                        Register
                    </Button>
                </form>
            </header>
        </div>
    )
}