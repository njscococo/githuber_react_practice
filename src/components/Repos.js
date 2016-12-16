import React from 'react';
import ReactDOM from 'react-dom';

export class Repos extends React.Component {
    render() {
        const clearFloat = {
            clear: 'both',
            width: '200px'
        }

        const hrStyle = {
            border: 0,
            height: '1px',
            backgroundColor:'#d4d4d4',
            color: '#d4d4d4'
        }

        let reposData = this.props.repo;
        let repoName = '';
        let description = '';
        let language = '';
        let stars = '';
        let updateDate = '';
        //console.log('reposData=', reposData);
        if (reposData) {
            repoName = reposData.name;
            description = reposData.description;
            language = reposData.language;
            stars = reposData.stargazers_count;
            updateDate = reposData.updated_at
        }
        return (
            <span style={clearFloat}>
                <div><span>{repoName}</span></div>
                <div><span>{description}</span></div>
                <span>{language}  </span>
                <span>Stars: {stars}   </span>
                <span>{updateDate}   </span>

                <hr style ={hrStyle}></hr>
            </span>
        );
    }
}