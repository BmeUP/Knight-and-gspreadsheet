import React from 'react';
import './basic.css';

class SideBar extends React.Component{

    showSideBar = () => {
            return(
                <p>
                    SideBar
                </p>
            )
        }

    render(){
        if(!window.location.href.includes('app/login')){
            return (
                <div className="maindiv">
                    {this.showSideBar()}
                </div>
            )
        }else{
            return null;
        }
    }
}

export default SideBar;
