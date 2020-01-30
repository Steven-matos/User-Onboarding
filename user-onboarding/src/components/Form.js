import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import UserCards from './UserCards';

const Forms = ({errors, touched, status}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status])
    }, [status]);



    return (
        <div>
            <Form>
                {/* GETTING USER'S NAME */}
                <label htmlFor='name' >Name:</label>
                <Field id='name' type='text' name='name'/>
                {touched.name && errors.name && (
                    <p className="errors">{errors.name}</p>
                )}

                {/* GETTING USER'S EMAIL */}
                <label htmlFor='email' >Email:</label>
                <Field id='email' type='email' name='email' />
                {touched.email && errors.email && (
                    <p className="errors">{errors.email}</p>
                )}

                {/* GETTING USER'S CREATED PASSWORD */}
                <label htmlFor='password' >Password:</label>
                <Field id='password' type='password' name='password' />
                {touched.password && errors.password && (
                    <p className="errors">{errors.password}</p>
                )}

                {/* USER'S AGREES TO READING TERMS OF SERVICE */}
                <label> Read Terms of Services 
                    <Field type='checkbox' name='terms' />
                </label>
                {touched.terms && errors.terms && (
                    <p className="errors">{errors.terms}</p>
                )}
                <button type='submit'>Submit</button>
            </Form>
            <UserCards users={users} />
        </div>
    );
};

const FormikForms = withFormik({
    mapPropsToValues({name, email, password, terms}){
        return {
            name: '',
            email: '',
            password: '',
            terms: false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().min(2, 'Name is Too Short!').max(50, 'Name is Too Long!').required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is Required'),
        password: Yup.string().min(8, 'Password Too Short!').max(32, 'Password Too Long').required('Password must be 8 to 32 Characters Long'),
        terms: Yup.boolean().oneOf([true], 'Must Accept Terms of Service'),
    }),
    handleSubmit(values, {setStatus}){
        console.log('Submitting...', values)
        axios.post("https://reqres.in/api/users",values)
        .then(res => {
            console.log('Success!',res)
            setStatus(res.data)
        })
        .catch(err => {
            console.error(err.response); 
        })
    }
})(Forms)

export default FormikForms;