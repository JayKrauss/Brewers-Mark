import React, { Component } from 'react';
import axios from "axios";

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        signUpCompany: ''
        // isLoading: true,
    }

    componentDidMount() {
        axios.get('/api/admin/profile')
            .then(res => {
                console.log(res);
                this.setState({signUpName: res.data.name});
            
            });
}

render() {
    return <div>
        <h1>Hello World!</h1>
        <h3>{this.state.signUpCompany}</h3>
    </div>

}
}
export default Profile;
