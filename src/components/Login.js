import React ,{useRef, useState} from 'react';
import {Form,Card,Button,Container,Alert} from 'react-bootstrap'
import {GoogleLogin} from 'react-google-login';
import { Link, useHistory } from "react-router-dom"
import {useAuth} from '../Context/AuthContext'
// import {Link} from 'react-router-dom'
import SignUp from '../SignUp'

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error , setError] = useState(' ');
    const [loading ,  setLoading] = useState(false)
    const history = useHistory()
   async function handleSubmit(e){
        e.preventDefault()
        

        try{
            setError('')
            setLoading(true)
           await login( emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }
        catch{
            setError("incorrect credentials")
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
               <h2 className="text-center mb-4">Log in</h2>
               {error && <Alert>{error}</Alert>}
               <form onSubmit = {handleSubmit}>
                   <Form.Group id="email">
                       <Form.Label>Email</Form.Label>
                       <Form.Control type="email" ref={emailRef} required />
                   </Form.Group>
                   <Form.Group id="password">
                       <Form.Label>Password</Form.Label>
                       <Form.Control type="password" ref={passwordRef} required />
                   </Form.Group>
                  
                   <Button disabled={loading} class="w-100" type="submit">Log in</Button>
               </form>
              </Card.Body>
          </card>

          <div className="w-100 text-center mt-2">
                  Need an account? <Link to="/signup">Sign Up</Link>
              </div>
              </div>
              </Container>
          
        
    )
}

export default Login
