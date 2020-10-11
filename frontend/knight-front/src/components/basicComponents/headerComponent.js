import React from 'react';
import './basic.css';

class Header extends React.Component{

    showHeader = () => {
        if(window.location.href.includes('app/login')){
            return null;
        }else{
            return(
                <div>
                    Header here
                </div>
            )
        }
    }

    render(){
        return (
            <div className="maindiv">
                {this.showHeader()}
            </div>
        )
    }
}

export default Header;
