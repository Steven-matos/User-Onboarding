import React, {useState, useEffect} from 'react';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import UserCards from './UserCards';
import {Error, FormContainer, Title, Label, UserField, Term} from './StyledComponents';

const Forms = ({errors, touched, status}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status])
    }, [status]);

    return (
        <div>
            <Title>Sign Up</Title>
            <FormContainer>
                {/* GETTING USER'S NAME */}
                <Label htmlFor='name' >Name:</Label>
                <UserField id='name' type='text' name='name'/>
                {touched.name && errors.name && (
                    <Error className="errors">{errors.name}</Error>
                )}

                {/* GETTING USER'S EMAIL */}
                <Label htmlFor='email' >Email:</Label>
                <UserField id='email' type='email' name='email' />
                {touched.email && errors.email && (
                    <Error className="errors">{errors.email}</Error>
                )}

                {/* GETTING USER'S CREATED PASSWORD */}
                <Label htmlFor='password' >Password:</Label>
                <UserField id='password' type='password' name='password' />
                {touched.password && errors.password && (
                    <Error className="errors">{errors.password}</Error>
                )}

                {/* USER'S AGREES TO READING TERMS OF SERVICE */}
                <Term> Accept Terms of Services <UserField type='checkbox' name='terms' />
                     
                </Term>
                {touched.terms && errors.terms && (
                    <Error className="errors">{errors.terms}</Error>
                )}
                <button type='submit'>Submit</button>
            </FormContainer>
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
        password: Yup.string().min(8, 'Must be 8 to 32 Characters Long').max(32, 'Must be 8 to 32 Characters Long').required('Must be 8 to 32 Characters Long'),
        terms: Yup.boolean().oneOf([true], 'Must Accept Terms of Service'),
    }),
    handleSubmit(values, {setStatus, resetForm}){
        console.log('Submitting...', values)
        axios.post("https://reqres.in/api/users",values)
        .then(res => {
            console.log('Success!',res)
            setStatus(res.data);
            resetForm();
        })
        .catch(err => {
            console.error(err.response); 
        })
    }
})(Forms)

export default FormikForms;