import React from 'react';
import ReactDOM from 'react-dom';

import { Avatar } from './Avatar';


export class Games extends React.Component{

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    render(){
        console.log('Games123');
        return (

            <div>
                <h3>Games test</h3>
                <Avatar userData=''/>

            </div>
        );
    }
}