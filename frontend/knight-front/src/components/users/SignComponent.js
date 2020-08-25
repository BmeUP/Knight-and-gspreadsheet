import React from 'react';
import '../../styles.css'
import { Formik, Field, Form } from 'formik';

const SignComponent = () => {
    return (
        <div>
            <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                }}
            >
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="email@domain.com" />
                </Form>
            </Formik>
        </div>
    )
}

export default SignComponent;
