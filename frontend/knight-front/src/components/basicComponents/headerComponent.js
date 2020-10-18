import React from 'react';
import './basic.css';

class Header extends React.Component{

    showHeader = () => {
            return(
                <p>
                    Header here
                </p>
            )
        }

    render(){
        if(!window.location.href.includes('app/login')){
            return (
                <div className="maindiv">
                    {this.showHeader()}
                </div>
            )
        }else{
            return null;
        }
    }
}

export default Header;
