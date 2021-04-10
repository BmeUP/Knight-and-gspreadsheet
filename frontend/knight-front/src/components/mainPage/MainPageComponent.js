import React from 'react';
import axios_instance from '../../axios';
import Header from '../basicComponents/headerComponent';
import Sidebar  from '../basicComponents/sideBarComponent';
import styles  from './styles.css'

class MainPage extends React.Component{

    componentDidMount(){
        axios_instance.post('/users/send');
    }

    render(){
        return (
            <div className="container">
                <div className="flex-100">
                    <Header />
                </div>
                <div className="pure-display-flex">
                    <div>
                        GGG
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;
