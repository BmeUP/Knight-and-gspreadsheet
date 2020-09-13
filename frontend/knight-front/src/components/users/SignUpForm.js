import React from 'react';
import { Redirect } from "react-router-dom";
import { Formik, Field, Form } from 'formik';
import axios from '../../axios';


class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email_error: false,
            redirect: false
        };
    }

    emailError = () => {
        if(this.state.email_error){
            return(
                <div className="email-error">
                    Any account with this email alredy exist
                </div>
            )
        }
    }

    emailValidate = (value) => {
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
            console.info(['email', value])
            return(
                <div>
                    shit
                </div>
            )
        }else{
            return (null)
        }
    }

    render(){
        if(this.state.redirect){
            return <Redirect to="/app/login" />
        }

        return (
            <div className="sign-form">
                <Formik
                initialValues={{
                    email: '',
                    password: '',
                    }}
                onSubmit={async values => {
                    let data;
                    data = {
                        "email": values.email,
                        "password": values.password
                    }
                    await axios.post('/users/create/', data).then(
                        res => {
                            if(res.status === 200){
                                this.setState({redirect: true});
                            }
                        }
                    ).catch(
                        err => {
                            if(err.request.responseText){
                                this.setState({email_error: true});
                            }
                        }
                    )
                  }}
                >
                    <Form>
                        <label htmlFor="email" className="form-title">Email</label>
                        <Field id="email" name="email" placeholder="email@domain.com"
                            validate={this.emailValidate} type='email' required/>
                        <label htmlFor="password" className="form-title">Password</label>
                        <Field id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  name="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" type="password" required />
                        <button className="btn-submit" type="submit">Sign Up</button>
                        {this.emailError()}
                    </Form>
                </Formik>
            </div>
        )
    }

};

export default SignUpForm;
