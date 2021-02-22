import React ,{useRef, useState} from 'react';
import {Form,Card,Button,Container,Alert} from 'react-bootstrap'
import {GoogleLogin} from 'react-google-login';
import {useAuth} from './Context/AuthContext'

const SignUp = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const newPasswordRef = useRef();
    const {signup} = useAuth();
    const [error , setError] = useState(' ');
    const [loading ,  setLoading] = useState(false)
    
    function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== newPasswordRef.current.value){
            return setError(`passwords don't match`)
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        }
        catch{
            setError("failed to create an account")
        }

        setLoading(false)
        
    }

    return (
        <Container 
        className="d-flex align-items-center justify-content-center" 
        style={{minHeight : '100ch'}}
        >
            <div className="w-100" style={{maxWidth:"400px"}}>
          <card>
              <Card.Body>
               <h2 className="text-center mb-4">Sign up</h2>
               {error && <Alert variant = "danger">{error}</Alert>}
               <form onSubmit = {handleSubmit}>
                   <Form.Group id="email">
                       <Form.Label>Email</Form.Label>
                       <Form.Control type="email" ref={emailRef} required />
                   </Form.Group>
                   <Form.Group id="password">
                       <Form.Label>Password</Form.Label>
                       <Form.Control type="password" ref={passwordRef} required />
                   </Form.Group>
                   <Form.Group id="password-confrim">
                       <Form.Label>Confrim Password</Form.Label>
                       <Form.Control type="password" ref={newPasswordRef} required />
                   </Form.Group>
                   <Button disabled={loading} class="w-100" type="submit">Sign Up</Button>
               </form>
              </Card.Body>
          </card>

              <div className="w-100 text-center mt-2">
                  Already have an account? Log in
              </div>
              </div>
              </Container>
          
        
    )
}

export default SignUp
