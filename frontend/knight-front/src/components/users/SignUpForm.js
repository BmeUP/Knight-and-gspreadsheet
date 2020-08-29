import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from '../../axios';


class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email_error: false
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
            return(console.info('unvalid'))
        }
    }

    render(){
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
                            console.log(['res', res])
                        }
                    ).catch(
                        err => {
                            this.setState({email_error: true})
                        }
                    )
                  }}
                >
                    <Form>
                        <label htmlFor="email" className="form-title">Email</label>
                        <Field id="email" name="email" placeholder="email@domain.com"
                            validate={this.emailValidate} />

                        <label htmlFor="password" className="form-title">Password</label>
                        <Field id="password" name="password" type="password" />
                        <button className="btn-submit" type="submit">SignUp</button>
                        {this.emailError()}
                    </Form>
                </Formik>
            </div>
        )
    }

};

export default SignUpForm;
