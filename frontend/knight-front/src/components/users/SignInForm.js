import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from '../../axios';


const SignInForm = () => {
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
                    "method": "create_user",
                    "data": values
                }
                await axios.post('/user/', data)
              }}
            >
                <Form>
                    <label htmlFor="email" className="form-title">Email</label>
                    <Field id="email" name="email" placeholder="email@domain.com" />

                    <label htmlFor="password" className="form-title">Password</label>
                    <Field id="password" name="password" type="password" />
                    <button className="btn-submit" type="submit">SignIp</button>
                </Form>
            </Formik>
        </div>
    )
};

export default SignInForm;
