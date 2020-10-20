import React from 'react';
import { Redirect, useLocation } from "react-router-dom";
import { Formik, Field, Form } from 'formik';
import axios_instance from '../../axios';


class SignInForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            failed_login: false
        };
    };

    failed_login = () => {
        if(this.state.failed_login){
            return(
                <div className="email-error" >
                    Incorrect email or password
                </div>
            )
        }
    }

    render(){
        if(this.state.redirect){
            return <Redirect to="/app/tables" />
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
                    await axios_instance.post('/users/login/', data).then(
                        res => {
                            localStorage.setItem("token", res.data.token);
                            this.setState({redirect: true});
                        }
                    ).catch(
                        error => {
                            this.setState({redirect: false, failed_login: true});
                        }
                    )
                  }}
                >
                    <Form>
                        <label htmlFor="email" className="form-title">Email</label>
                        <Field id="email" name="email" placeholder="email@domain.com" />

                        <label htmlFor="password" className="form-title">Password</label>
                        <Field id="password" name="password" type="password" />
                        <button className="btn-submit" type="submit">Sign In</button>
                    </Form>
                </Formik>
                {this.failed_login()}
            </div>
        )
    }
};

export default SignInForm;
