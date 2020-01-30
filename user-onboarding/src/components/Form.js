import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Forms = ({values, errors, touched, status}) => {
    return (
        <div>
            <Form>
                <label htmlFor='name' >Name:</label>
                <Field id='name' type='text' name='name'/>
                <label htmlFor='email' >Email:</label>
                <Field id='email' type='email' name='email' />
                <label htmlFor='password' >Password:</label>
                <Field id='password' type='password' name='password' />
                <label> Read Terms of Services <Field type='checkbox' name='terms' /></label>

                <button type='submit'>Submit</button>
            </Form>
        </div>
    );
};

const FormikForms = withFormik({
    mapPropsToValues({name, email, password, terms}){
        return {
            name: '',
            email: '',
            password: '',
            terms: terms || false
        }
    }
})(Forms)

export default FormikForms;