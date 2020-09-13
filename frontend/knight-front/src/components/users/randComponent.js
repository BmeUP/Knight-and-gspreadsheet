import React from 'react';
import axios_instance from '../../axios';

class Rand extends React.Component{

    componentDidMount(){
        axios_instance.post('/users/send');
    }

    render(){
        return (<div>H</div>)
    }
}

export default Rand;
