import React from 'react';
import './basic.css';

class Header extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        console.info(['sdafsadf'])
    }

    showHeader = () => {
            return(
                <p>
                    Header here
                </p>
            )
        }

    render(){
        return(
            <div className="header">
                {this.showHeader()}
            </div>
        )
    }
}

export default Header;
