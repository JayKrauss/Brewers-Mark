import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        // isLoading: true,
        // token: '',
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

    // this.onTextboxChangeSignInUsername = this.onTextboxChangeSignInUsername.bind(this);
    // this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    // this.onTextboxChangeSignUpCompany = this.onTextboxChangeSignUpCompany.bind(this);
    // this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    // this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
    // this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    // this.onTextboxChangeSignUpPhone = this.onTextboxChangeSignUpPhone.bind(this);
    // this.onTextboxChangeSignUpUsername = this.onTextboxChangeSignUpUsername.bind(this);
    // this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    // this.onTextboxChangeSignUpPasswordConf = this.onTextboxChangeSignUpPasswordConf.bind(this);


    // this.onSignIn = this.onSignIn.bind(this);
    // this.onSignUp = this.onSignUp.bind(this);
    // this.logout = this.logout.bind(this);


    // componentDidMount() {
    //     const obj = getFromStorage('the_main_app');
    //     if (obj && obj.token) {
    //         const { token } = obj;
    //         // Verify token
    //         fetch('/api/account/verify?token=' + token)
    //             .then(res => res.json())
    //             .then(json => {
    //                 if (json.success) {
    //                     this.setState({
    //                         token,
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
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    // onTextboxChangeSignInUsername(event) {
    //     this.setState({
    //         signInUsername: event.target.value,
    //     });
    // };

    // onTextboxChangeSignInPassword(event) {
    //     this.setState({
    //         signInPassword: event.target.value,
    //     });
    // }

    // onTextboxChangeSignUpCompany(event) {
    //     this.setState({
    //         signUpCompany: event.target.value,
    //     });
    // }

    // onTextboxChangeSignUpFirstName(event) {
    //     this.setState({
    //         signUpFirstName: event.target.value,
    //     });
    // }

    // onTextboxChangeSignUpLastName(event) {
    //     this.setState({
    //         signUpLastName: event.target.value,
    //     });
    // }

    // onTextboxChangeSignUpEmail(event) {
    //     this.setState({
    //         signUpEmail: event.target.value,
    //     });
    // }
    // onTextboxChangeSignUpPhone(event) {
    //     this.setState({
    //         signUpPhone: event.target.value,
    //     });
    // }

    // onTextboxChangeSignUpUsername(event) {
    //     this.setState({
    //         signUpUsername: event.target.value,
    //     });
    // }

    // onTextboxChangeSignUpPassword(event) {
    //     this.setState({
    //         signUpPassword: event.target.value,
    //     });
    // }

    // onTextboxChangeSignUpPasswordConf(event) {
    //     this.setState({
    //         signUpPasswordConf: event.target.value,
    //     });
    // }

    onSignUp = () =>  {
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