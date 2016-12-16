import React from 'react';
import ReactDOM from 'react-dom';

import { SearchBar } from './SearchBar';
import { Users } from './Users';
import { Games } from './Games';
import { Repos } from './Repos';

export class MyBgg extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', userData: {}, repos: [] };
        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleTextInput(value) {
        this.setState({ value: value });
    }

    handleButtonClick(userData, repos) {
        console.log('MyBgg:', userData, repos);
        this.setState({ userData: userData, repos: repos });
    }

    render() {
        const avatarDiv = {
            height: 300
        }

        const value = this.state.value;
        const userData = this.state.userData;
        let res;
        if (this.props.locate.indexOf('games') >= 0) {
            res = <Games />;
        } else {
            res = <Users userData={userData} />;
        }
        return (
            <div>
                <div style={avatarDiv}>
                    <SearchBar value={value} onChange={this.handleTextInput} onBtnClick={this.handleButtonClick} />
                    {res}

                </div>
                {this.state.repos.map((curValue)=>{
                    return <Repos repo={curValue} key={curValue.id}/>;
                })}
                
            </div>
        );
    }
}