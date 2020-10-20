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
        return(
            <div className="sidebar">
                {this.showSideBar()}
            </div>
        )
    }
}

export default SideBar;
