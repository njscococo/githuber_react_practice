import React from 'react';
import ReactDOM from 'react-dom';

import { Avatar } from './Avatar';

export class Users extends React.Component{
    shouldComponentUpdate(nextProps, nextState){
        console.log('nextProps', nextProps);
        console.log('nextState:', nextState);
        return true;
    }

    render(){
        //console.log('Users');
        return (
            <div>
                <h3>Users Page</h3>
                <Avatar userData={this.props.userData} />

            </div>
        );
    }
}