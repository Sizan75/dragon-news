import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
const Register = () => {
const {createUser}=useContext(AuthContext)
const [error, setError]= useState('')

const handleSubmit = event =>{
        event.preventDefault();
        const form= event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        console.log(name,email,password,photoURL)
        createUser(email,password)
        .then(result =>{
            const user=result.user;
            console.log(user)
            form.reset()
            setError('')
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
        })
    }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control name='name' type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
            <Form.Label>Your Photo Url</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Your PhotoUrl" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        
        <Button variant="warning" type="submit">
            Submit
        </Button>
        <Form.Text className="text-danger">
                {error}
            </Form.Text>
    </Form>
    );
};

export default Register;