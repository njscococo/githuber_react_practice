import React from 'react';
import ReactDOM from 'react-dom';

import { Avatar } from './Avatar';


export class Games extends React.Component{
    render(){
        console.log('Games');
        return (

            <div>
                <h3>Games test</h3>
                <Avatar userData=''/>

            </div>
        );
    }
}