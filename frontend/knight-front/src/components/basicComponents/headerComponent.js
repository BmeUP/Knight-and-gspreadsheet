import React from 'react';
import { Redirect } from "react-router-dom";
import './basic.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logout: false
        }
    };

    componentDidMount(){
        console.info(['sdafsadf'])
    }

    logout_btn = () => {
        return (
            <div className="logout-btn" onClick={this.logout}>
                Logout
            </div>
        )
    }

    logout = () => {
        this.setState({
            logout: true
        });
    }

    showHeader = () => {
            return(
                <div className="header-child">
                    <span className="flex-0-0-90">
                        Header here
                    </span>
                    <div className="logout-div">
                        {this.logout_btn()}
                    </div>
                </div>
            )
        }

    render(){
        if(this.state.logout){
            localStorage.clear('token');
            return <Redirect to="/" />
        }
        return(
            <div className="header">
                {this.showHeader()}
            </div>
        )
    }
}

export default Header;
