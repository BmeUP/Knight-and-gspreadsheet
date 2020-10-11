import React from 'react';
import axios_instance from '../../axios';

class MainPage extends React.Component{

    componentDidMount(){
        axios_instance.post('/users/send');
    }

    render(){
        return (
            <div>
                Main Components
            </div>
        )
    }
}

export default MainPage;
