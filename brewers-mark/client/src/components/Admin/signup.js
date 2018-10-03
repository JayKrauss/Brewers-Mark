import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        // isLoading: true,
        // session:''
        signUpError: '',
        signInError: '',
        signInUsername: '',
        signInPassword: '',
        signUpCompany: '',
        signUpFirstName: '',
        signUpLastName: '',
        signUpEmail: '',
        signUpPhone: '',
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

    onSignUp = () => {
        // Grab state
        const {
            signUpCompany,
            signUpFirstName,
            signUpLastName,
            signUpEmail,
            signUpPhone,
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

            company: signUpCompany,
            firstName: signUpFirstName,
            lastName: signUpLastName,
            email: signUpEmail,
            phone: signUpPhone,
            username: signUpUsername,
            password: signUpPassword,
            passwordConf: signUpPasswordConf
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        // })
        // .then(res => res.json())
        // .then(json => {
        //     console.log('json', json);
        //     if (json.success) {
        //         this.setState({
        //             signUpError: json.message,
        //             isLoading: false,
        //             signUpEmail: '',
        //             signUpPassword: '',
        //         });
        //     } else {
        //         this.setState({
        //             signUpError: json.message,
        //             isLoading: false,
        //         });
        //     }
        // });
    }

    // onSignIn() {
    //     // Grab state
    //     const {
    //         signInUsername,
    //         signInPassword,
    //     } = this.state;

    //     this.setState({
    //         isLoading: true,
    //     });

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
                <button onClick={this.onSignIn}>Sign In</button>
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
                <input
                    name="signUpCompany"
                    placeholder="Brewery Name"
                    value={this.state.signUpCompany}
                    onChange={this.handleInputChange}
                /><br />
                <input
                    name="signUpFirstName"
                    placeholder="First Name"
                    value={this.state.signUpFirstName}
                    onChange={this.handleInputChange}
                /><br />
                <input
                    name="signUpLastName"
                    placeholder="Last Name"
                    value={this.state.signUpLastName}
                    onChange={this.handleInputChange}
                /><br />
                <input
                    name="signUpEmail"
                    placeholder="Email"
                    value={this.state.signUpEmail}
                    onChange={this.handleInputChange}
                /><br />
                <input
                    name="signUpPhone"
                    placeholder="Phone Number"
                    value={this.state.signUpPhone}
                    onChange={this.handleInputChange}
                /><br />
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
                <button onClick={this.onSignUp}>Sign Up</button>
            </div>

        </div>

    }
};


export default Signup;
