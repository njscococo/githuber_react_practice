import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.clickSend = this.clickSend.bind(this);
    }

    handleChange(e){
        this.props.onChange(e.target.value);
    }

    getUserByName(){
        let apiurl = 'https://api.github.com/users/' + this.props.value;
        //console.log('getUserByName:', apiurl);
        return axios.get(apiurl);
    }

    getReposByOwnerName(){
        let apiurl = 'https://api.github.com/users/' + this.props.value +'/repos';
        return axios.get(apiurl);
    }

    clickSend(){
        axios.all([this.getReposByOwnerName(), this.getUserByName()])
            .then(axios.spread((repos, user)=>{
                console.log('acct:',user);
                //console.log('perms:',repos);
                this.props.onBtnClick(user.data, repos.data);
            }))
            .catch((err)=>{
                console.error(err);
            });
    }

    render(){
        return (
            <div>
                <input type="text" value={this.props.value} onChange={this.handleChange}  />
                <button onClick={this.clickSend}>Search</button>                
            </div>
        );
    } 
}