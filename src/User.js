import React, { Component } from 'react';
import axios from 'axios';

class User extends Component{
    constructor(){
        super();
        this.state = {
            user: {}
        };
    }

    // not sure why we use component did update here and just componedt did mount in users 
    async componentDidUpdate(prevProps){
        // that stops the infinite loop
        if(prevProps.selectedUserId !== this.props.selectedUserId){
            const user = (await axios.get(`/api/user/${this.props.selectedUserId}`)).data
            this.setState({ user })
        }
        // console.log(this.props);
    }
    async componentDidMount(){ 
        const user = (await axios.get(`/api/user/${this.props.selectedUserId}`)).data
        this.setState({ user })
    }

    render(){

        const { user } = this.state

        return (
            <div>
                { user.bio }
            </div>
        );
    }
}

export default User;