import React, {Component} from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            authenticated: "checking"
        };
    }

    componentDidMount() {
        UserService.getAuthTest().then(authed => this.setState({authenticated: authed.authenticated ? "passed" : "failed"}))
    }

    render() {
        const {currentUser} = this.state;
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>{currentUser.username}</strong> Profile
                    </h3>
                </header>
                <p>
                    <strong>Token:</strong>{" "}
                    {currentUser.accessToken.substring(0, 20)} ...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>
                <p>
                    <strong>Id:</strong>{" "}
                    {currentUser.id}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {currentUser.email}
                </p>
                <p>
                    <strong>Authentication check:</strong>{" "}
                    {this.state.authenticated}
                </p>
            </div>
        );
    }
}

export default Profile