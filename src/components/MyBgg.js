import React from 'react';
import ReactDOM from 'react-dom';
import Immutable, { is } from 'immutable';

import { SearchBar } from './SearchBar';
import { Users } from './Users';
import { Games } from './Games';
import { Repos } from './Repos';

export class MyBgg extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { value: '', userData: {}, repos: [] };

        //import Immutable to wrap the state to an immutable object
        this.state ={data: Immutable.fromJS({ value: '', userData: {}, repos: [] })};
        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleTextInput(value) {
        console.log('handleTextInput value:', value);
        //let newState = { value: value };
        let newState = { data: this.state.data.updateIn(['value'], val=>value) };
        console.log('handleTextInput newState:', newState);
        this.setState(newState);
        console.log('handleTextInput:', this.state);
    }

    handleButtonClick(userData, repos) {
        //console.log('MyBgg:', userData, repos);
        let newState = { data: this.state.data.merge({userData: userData, repos: repos})};
        //console.log('handleButtonClick MyBgg:', newState);
        this.setState(newState);
        console.log('handleButtonClick MyBgg:', this.state);
        
    }

    render() {
        const avatarDiv = {
            height: 300
        }

        // const value = this.state.value;
        // const userData = this.state.userData;

        console.log("render this.state:", this.state);
        const value = this.state.data.getIn(['value']);
        const userData = this.state.data.getIn(['userData']);
        let res;
        if (this.props.locate.indexOf('games') >= 0) {
            res = <Games />;
        } else {
            res = <Users userData={userData.toJS()} />;
        }

        
        return (
            <div>
                <div style={avatarDiv}>
                    <SearchBar value={value} onChange={this.handleTextInput} onBtnClick={this.handleButtonClick} />
                    {res}

                </div>
                
                {
                    this.state.data.getIn(['repos']).toJS().map((curValue) => {
                        //console.log('getIn:', curValue);
                    return <Repos repo={curValue} key={curValue.id} />;})
                }
                

            </div>
        );
    }
}