import React ,{useRef} from 'react';
import {Form,Card,Button,Container} from 'react-bootstrap'
import {GoogleLogin} from 'react-google-login';
import {useAuth} from './Context/AuthContext'

const SignUp = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const newPasswordRef = useRef();
    const {signup} = useAuth();
    
    function handleSubmit(e){
        e.preventDefault()
        signup(emailRef.current.value , passwordRef.current.value)
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
               <form>
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
                   <Button class="w-100" type="submit">Sign Up</Button>
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
