import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from '../../axios';
import '../../styles.css'
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

class SignComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signup: false
        };
    }

    formChoose = () => {
        if(!this.state.signup){
            return <SignInForm />
        }else{
            return <SignUpForm />
        }
    }

    sigUpPick = () => {
        this.setState({
            signup: true
        })
    }

    render(){
        return(
            <div className="sign-form">
                {this.formChoose()}
                <span className="acc-span" onClick={this.sigUpPick}>
                    Don't have an account yet?
                </span>
            </div>
        )
    }

}

export default SignComponent;
