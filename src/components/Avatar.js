import React from 'react';
import ReactDOM from 'react-dom';

export class Avatar extends React.Component {
    render() {
        const imgStyle = {
            height: 180,
            width: 160
        };
        const floatDivStyle = {
            height: 180,
            
            float: 'left',
            padding: 10
        }
        //console.log('avatar_url:', this.props);
        let imgUrl = this.props.userData.avatar_url ;
        let imgAvatar;
        if(imgUrl){
            imgAvatar = <img src={imgUrl} style={imgStyle} className="test" />
        }else{
            imgStyle.height = 0;
            imgStyle.width = 0;
            imgAvatar = <img  style={imgStyle} className="test" />
        }
        

        return (            
            <div>
                <span style={floatDivStyle}>
                    {imgAvatar}
                </span>
                <span style={floatDivStyle}>
                    <div>User Name:<span>{this.props.userData.login}</span></div>
                    <div>Email:<span>{this.props.userData.email}</span></div>
                    <div>GitHub URL:<span>{this.props.userData.html_url}</span></div>
                    <div>Company:<span>{this.props.userData.html_url}</span></div>
                    <div>bmv:<span>{this.props.userData.html_url}</span></div>
                </span>
            </div>
            
        );
    }
}