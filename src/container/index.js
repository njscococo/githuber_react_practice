import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,  Link,IndexLink} from 'react-router';
import {MyBgg}  from '../components/MyBgg';

export class BGGContainer extends React.Component{
    render(){
        let path = this.props.location.pathname;
        
        return (
            <div>
                <h1>GitHuber</h1>
                <ul>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/games">Games</Link></li>
                </ul>
                <MyBgg locate={ path }/>
            </div>
        );
    }
}