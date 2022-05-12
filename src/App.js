import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

class App extends Component {
    constructor(){
        super();
        this.state = {
            users: [],
            selectedUserId: ''
        };
    }

    async componentDidMount(){
        const users = (await axios.get('/api/users')).data;
        this.setState({ users });
        console.log(users);
        // this listens for change 
        window.addEventListener('hashchange', ()=> {
            this.setState({ selectedUserId: window.location.hash.slice(1)} );
        });
        // this is so we don;t lose it on a refresh
        this.setState({ selectedUserId: window.location.hash.slice(1)} );
    }
    
    render(){
        const { users, selectedUserId } = this.state
        return (
            <div>
                <h1>Acme Users</h1>
                <ul>
                    <li><a href='#'>All</a></li>
                    {
                        users.map( user => {
                            return (
                                <li className= { selectedUserId * 1 === user.id ? 'selected' : ''} key = { user.id }>
                                    <a href={`#${user.id}`}>
                                    { user.name }
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
                <div>
                    {
                        // this seems to be a turnery statemnet if we have a user 
                        // the =n load the user component
                        !!selectedUserId && <User selectedUserId = { selectedUserId}/>
                    }

                </div>
            </div>
        );
        ;
    }
}

// not really sure the difference between export default just export 
export default App;