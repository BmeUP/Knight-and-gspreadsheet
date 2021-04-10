import React from 'react';
import { Redirect } from "react-router-dom";
import axios_instance from "../../axios";
import './basic.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logout: false
        }
    };
    

    componentDidMount(){
    }

    logout_btn = () => {
        return (
            <div className="logout-btn" onClick={this.logout}>
                Logout
            </div>
        )
    }

    check_tables_btn = () => {
        return (
            <div className="logout-btn" onClick={this.check_tables}>
                Check tables
            </div>
        )
    }

    check_tables = () => {
        axios_instance.post('/check_tables').then(
            res => {
                console.info(['res', res]);
            }
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
                    <span className="flex-0-0-83">
                        Header here
                    </span>
                    <div className="logout-div">
                        {this.check_tables_btn()}
                    </div>
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
