import React, { Component } from 'react';
// import adminAPI from "../../../routes/API/adminRoute.js";
import axios from 'axios';
import cookie from 'react-cookies';
import Input from '../Form';
import FormBtn from '../Form';


class Signup extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        isLoading: false,
        session: '',
        signUpError: '',
        signInError: '',
        signInUsername: '',
        signInPassword: '',
        signUpName: '',
        signUpAge: '',
        signUpEmail: '',
        signUpUsername: '',
        signUpPassword: '',
        signUpPasswordConf: '',
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onSignUpSubmit = () => {
        // event.preventDefault();
        // Grab state
        const {
            signUpName,
            signUpAge,
            signUpEmail,
            signUpUsername,
            signUpPassword,
            signUpPasswordConf,
        } = this.state;

        this.setState({
            isLoading: true,
        });
        console.log(this.state);

        // Post request to backend
        axios.post('/api/admin/registration', {

            name: signUpName,
            age: signUpAge,
            email: signUpEmail,
            username: signUpUsername,
            password: signUpPassword,
            passwordConf: signUpPasswordConf
        })
        .then((response) => {
            console.log(response);
            this.props.history.push('/profile');
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    onSignInSubmit = () => {
        // Grab state
        const {
            signInUsername,
            signInPassword
        } = this.state;

        this.setState({
            isLoading: true,
        });
        console.log(this.state);


        axios.post('/api/admin/registration', {
            username: signInUsername,
            password: signInPassword
        })
            .then((response) => {
                console.log(response);
                this.props.history.push('/profile');
            })
            .catch(function (error) {
                console.log(error);
            })
    };



    //     // Post request to backend
    //     fetch('/api/admin.js', {
    //         method: 'POST',
    //         headers: {
    //             'Contenname': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             email: signInUsername,
    //             password: signInPassword,
    //         }),
    //     }).then(res => res.json())
    //         .then(json => {
    //             console.log('json', json);
    //             if (json.success) {
    //                 setInStorage('the_main_app', { token: json.token });
    //                 this.setState({
    //                     signInError: json.message,
    //                     isLoading: false,
    //                     signInUsername: '',
    //                     signInPassword: '',
    //                     token: json.token,
    //                 });
    //             } else {
    //                 this.setState({
    //                     signInError: json.message,
    //                     isLoading: false,
    //                 });
    //             }
    //         });
    // }

    // logout() {
    //     this.setState({
    //         isLoading: true,
    //     });
    //     const obj = getFromStorage('the_main_app');
    //     if (obj && obj.token) {
    //         const { token } = obj;
    //         // Verify token
    //         fetch('/api/account/logout?token=' + token)
    //             .then(res => res.json())
    //             .then(json => {
    //                 if (json.success) {
    //                     this.setState({
    //                         token: '',
    //                         isLoading: false
    //                     });
    //                 } else {
    //                     this.setState({
    //                         isLoading: false,
    //                     });
    //                 }
    //             });
    //     } else {
    //         this.setState({
    //             isLoading: false,
    //         });
    //     }
    // }

    render() {
        return <div>
            <div>
                <p>Sign In</p>
                <input
                    name="signInUsername"
                    placeholder="Username"
                    value={this.state.signInUsername}
                    onChange={this.handleInputChange}
                />
                <br />
                <input
                    name="signInPassword"
                    placeholder="Password"
                    value={this.state.signInPassword}
                    onChange={this.handleInputChange}
                />
                <br />
                <button onClick={this.onSignInSubmit}>Sign In</button>
            </div>
            <br />
            <br />
            <div>
                {
                    (this.state.signUpError) ? (
                        <p>{this.state.signUpError}</p>
                    ) : (null)
                }
                <p>Sign Up</p>
                {/* <input
                    name="signUpCompany"
                    placeholder="Brewery Name"
                    value={this.state.signUpCompany}
                    onChange={this.handleInputChange}
                /><br /> */}
                <input
                    name="signUpName"
                    placeholder="First Name"
                    value={this.state.signUpFirstName}
                    onChange={this.handleInputChange}
                /><br />
                <input
                    name="signUpAge"
                    placeholder="Age"
                    value={this.state.signUpLastName}
                    onChange={this.handleInputChange}
                /><br />
                <input
                    name="signUpEmail"
                    placeholder="Email"
                    value={this.state.signUpEmail}
                    onChange={this.handleInputChange}
                /><br />
                {/* <input
                    name="signUpPhone"
                    placeholder="Phone Number"
                    value={this.state.signUpPhone}
                    onChange={this.handleInputChange}
                /><br /> */}
                <input
                    name="signUpUsername"
                    placeholder="Username"
                    value={this.state.signUpUsername}
                    onChange={this.handleInputChange}
                /><br />
                <input
                    name="signUpPassword"
                    placeholder="Password"
                    value={this.state.signUpPassword}
                    onChange={this.handleInputChange}
                /><br />
                <input
                    name="signUpPasswordConf"
                    placeholder="Confirm Password"
                    value={this.state.signUpPasswordConf}
                    onChange={this.handleInputChange}
                /><br />
                <button onClick={this.onSignUpSubmit}>Sign Up</button>
            </div>

        </div>

    }
};


export default Signup;
