import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from '../../axios';
import './user_styles.css';
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
            signup: !this.state.signup
        })
    }

    donHaveAcc = () => {
        if(!this.state.signup){
            return(
                <span className="acc-span animate__animated animate__flip" onClick={this.sigUpPick}>
                    Don't have an account yet?
                </span>
            )
        }else{
            return(
                <span className="acc-span" onClick={this.sigUpPick}>
                    Sign In
                </span>
            )
        }
    }

    render(){
        return(
            <div className="sign-form">
                {this.formChoose()}
                {this.donHaveAcc()}
            </div>
        )
    }

}

export default SignComponent;
