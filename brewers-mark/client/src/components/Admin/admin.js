import React, { Component } from 'react';
import Icons from '../Icons';
import './admin.css';
import SignUpIcon from '../../assets/images/signup_icon.ico';
import LoginIcon from '../../assets/images/login_icon.ico';
import { Redirect } from 'react-router-dom';


class Admin extends React.Component {

    state = {
        icons: [
            {
                name: "AdminSignUp",
                src: SignUpIcon,
                url: "/admin/registration",
                redirect: false,
                clicked: false,
                speed: "20s",
                styling: "Admin-icon"
            },

            {
                name: "AdminLogin",
                src: LoginIcon,
                url: "/admin/login",
                redirect: false,
                clicked: false,
                speed: "20s",
                styling: "Admin-icon-counter"
            }
        ]
    }

    // setRedirect = () => {
    //     this.setState({
    //         redirect: true
    //     })
    // }

    // renderRedirect = () => {
    //     if (this.state.redirect) {
    //         return <Redirect to url />
    //     }
    // }

    // handleClick = event => {
    //     this.setState(state => ({
    //         redirect: !state.isToggleOn
    //     }));
    // }
    // if(this.state.click) {
    //     this.renderRedirect
    // }
    handleClick = event => {
        console.log(event.target);
        const { id } = event.target.dataset;
        let icons = [...this.state.icons];
        console.log(id);
        console.log(icons);

        // const icon = icons[id];
    };

    renderIcons() {
        return this.state.icons.map((icon, index) => (
            <Icons {...icon} alt={icon.name} handleClick={this.handleClick} />
        ));
    }

    render() {
        return (
            <div className="Admin">
                <div className="Admin-header">
                    {this.renderIcons()}
                </div>
            </div>
        );
    }
}
export default Admin;