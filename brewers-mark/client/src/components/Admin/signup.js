import React, { Component } from 'react';
import 'whatwg-fetch';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token: '',
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
        };

        this.onTextboxChangeSignInUsername = this.onTextboxChangeSignInUsername.bind(this);
        this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
        this.onTextboxChangeSignUpCompany = this.oonTextboxChangeSignUpCompanyl.bind(this);
        this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
        this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPhone = this.onTextboxChangeSignUpPhone.bind(this);
        this.onTextboxChangeSignUpUsername = this.onTextboxChangeSignUpUsername.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
        this.onTextboxChangeSignUpPasswordConf = this.onTextboxChangeSignUpPasswordConf.bind(this);


        this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            // Verify token
            fetch('/api/account/verify?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token,
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false,
                        });
                    }
                });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    onTextboxChangeSignInUsername(event) {
        this.setState({
            signInUsername: event.target.value,
        });
    }

    onTextboxChangeSignInPassword(event) {
        this.setState({
            signInPassword: event.target.value,
        });
    }

    onTextboxChangeSignUpCompany(event) {
        this.setState({
            signUpEmail: event.target.value,
        });
    }

    onTextboxChangeSignUpFirstName(event) {
        this.setState({
            signUpFirstName: event.target.value,
        });
    }

    onTextboxChangeSignUpLastName(event) {
        this.setState({
            signUpLastName: event.target.value,
        });
    }

    onTextboxChangeSignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value,
        });
    }
    onTextboxChangeSignUpPhone(event) {
        this.setState({
            signUpPhone: event.target.value,
        });
    }

    onTextboxChangeSignUpUsername(event) {
        this.setState({
            signUpUsername: event.target.value,
        });
    }

    onTextboxChangeSignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value,
        });
    }

    onTextboxChangeSignUpPassword(event) {
        this.setState({
            signUpPasswordConf: event.target.value,
        });
    }

    onSignUp() {
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

        // Post request to backend
        fetch('/api/admin.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                company: signUpCompany,
                firstName: signUpFirstName,
                lastName: signUpLastName,
                email: signUpEmail,
                phone: signUpPhone,
                username: signUpUsername,
                password: signUpPassword,
                passwordConf: signUpPasswordConf
            }),
        })
        .then(res => res.json())
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signUpEmail: '',
                        signUpPassword: '',
                    });
                } else {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                    });
                }
            });
    }

    onSignIn() {
        // Grab state
        const {
            signInUsername,
            signInPassword,
        } = this.state;

        this.setState({
            isLoading: true,
        });

        // Post request to backend
        fetch('/api/admin.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signInUsername,
                password: signInPassword,
            }),
        }).then(res => res.json())
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    setInStorage('the_main_app', { token: json.token });
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                        signInUsername: '',
                        signInPassword: '',
                        token: json.token,
                    });
                } else {
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                    });
                }
            });
    }

    logout() {
        this.setState({
            isLoading: true,
        });
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            // Verify token
            fetch('/api/account/logout?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token: '',
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false,
                        });
                    }
                });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        // const {
        //     isLoading: true,
        //     token: '',
        //     session:''
        //     signUpError: '',
        //     signInError: '',
        //     signinEmail: '',
        //     signInPassword: '',
        //     signUpCompany: '',
        //     signUpFirstName: '',
        //     signUpLastName: '',
        //     signUpEmail: '',
        //     signUpPhone: '',
        //     signUpUsername: '',
        //     signUpPassword: '',
        //     signUpPasswordConf: '',
        // } = this.state;
    

        // if (isLoading) {
        //     return (<div><p>Loading...</p></div>);
        // }

        // if (!token) {
        //     return (
        //         <div>
        //             <div>
        //                 {
        //                     (signInError) ? (
        //                         <p>{signInError}</p>
        //                     ) : (null)
        //                 }
                        <p>Sign In</p>
                        <input
                            type="Username"
                            placeholder="Username"
                            value={signInUsername}
                            onChange={this.onTextboxChangeSignInUsername}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="Password"
                            value={signInPassword}
                            onChange={this.onTextboxChangeSignInPassword}
                        />
                        <br />
                        <button onClick={this.onSignIn}>Sign In</button>
                    </div>
                    <br />
                    <br />
                    <div>
                        {
                            (signUpError) ? (
                                <p>{signUpError}</p>
                            ) : (null)
                        }
                        <p>Sign Up</p>
                        <input
                            type="company"
                            placeholder="Brewery Name"
                            value={signUpCompany}
                            onChange={this.onTextboxChangeSignUpCompany}
                        /><br />
                        <input
                            type="firstName"
                            placeholder="First Name"
                            value={signUpFirstName}
                            onChange={this.onTextboxChangeSignUpFirstName}
                        /><br />
                        <input
                            type="lastName"
                            placeholder="Last Name"
                            value={signUpLastName}
                            onChange={this.onTextboxChangeSignUpLastName}
                        /><br />
                        <input
                            type="email"
                            placeholder="Email"
                            value={signUpEmail}
                            onChange={this.onTextboxChangeSignUpEmail}
                        /><br />
                        <input
                            type="email"
                            placeholder="Email"
                            value={signUpEmail}
                            onChange={this.onTextboxChangeSignUpEmail}
                        /><br />
                        <input
                            type="phone"
                            placeholder="Phone Number"
                            value={signUpPhone}
                            onChange={this.onTextboxChangeSignUpPhone}
                        /><br />
                        <input
                            type="username"
                            placeholder="Username"
                            value={signUpUsername}
                            onChange={this.onTextboxChangeSignUpUsername}
                        /><br />
                        <input
                            type="password"
                            placeholder="Password"
                            value={signUpPassword}
                            onChange={this.onTextboxChangeSignUpPassword}
                        /><br />
                        <input
                            type="passwordConf"
                            placeholder="Confirm Password"
                            value={signUpPasswordConf}
                            onChange={this.onTextboxChangeSignUpPasswordConf}
                        /><br />
                        <button onClick={this.onSignUp}>Sign Up</button>
                    </div>

                </div>
            );
        }

        return (
            <div>
                <p>Account</p>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Signup;