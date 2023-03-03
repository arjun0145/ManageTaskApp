import React, { useState } from 'react'
import { Container, Alert, Row, Col, Form, Button } from 'react-bootstrap'
import NavigationBar from './NavigationBar';
import { Login } from '../Service/TaskService';
import Success from './Success';
import TaskList from './TaskList'
import NavigationBar2 from './Navigationbar2';
import { Link } from 'react-router-dom';

function Loginpage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAlert, setIsAlert] = useState(false)
    const [CurrentUser, setCurrentUser] = useState()
    const [isLogin, setIsLogin] = useState(false)
    const [ani, setAni] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();



        try {

            let data = { email: username, password: password }
            let x = await Login(data)
            setCurrentUser(x.data)

            // here we set into localstorage  

            localStorage.setItem("data", JSON.stringify(x.data))
            if (x) {
                setTimeout(() => {
                    setAni(false)
                    setIsLogin(true)

                }, 3000)
                setAni(true)
            }

        } catch (error) {

            setTimeout(() => {
                setIsAlert(false)
            }, 2000)
            setIsAlert(true)
        }


    }
    return (
        <div>

            {!isLogin ?
                <div>

                    <NavigationBar></NavigationBar>
                    <Container className="mt-5">
                        <Alert className='text-center'> <b>This is Login  page</b> </Alert>
                        {ani ?

                            <div>
                                <Success></Success>
                                <h3 className='text-center'>   {CurrentUser.name} {" ..."} You Have Loged In SuccessFully      </h3>
                            </div>



                            :
                            <Container className='border border-2 mt-5'>

                                <Row className="justify-content-center mt-3">
                                    <Col xs={6}>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label><b>Email :</b></Form.Label>
                                                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter Email " />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label className='mt-3'><b>Password :</b></Form.Label>
                                                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                                            </Form.Group>
                                            <div className='text-center mt-3'>
                                                <Button variant="primary" type="submit" >
                                                    Login
                                                </Button>

                                                <Link to="/register" className='mx-5 '>
                                                    <Button> Register </Button>
                                                </Link>
                                            </div>

                                        </Form>
                                    </Col>
                                </Row>

                                <Container className='mt-3 text-center' >
                                    {isAlert ?
                                        <Alert variant="danger"><b> Invalid username or password</b> </Alert> : null}
                                </Container>

                            </Container>}




                    </Container>

                </div>
                :
                <div>
                    {/* <NavigationBar2></NavigationBar2>
                    <Container className='mt-5'>

                    <Alert className='text-center'>  <b>{CurrentUser.name} Ji Welcome to TaskManager</b> </Alert>


                    </Container> */}


                    <TaskList></TaskList>

                </div>
            }








        </div>
    )
}

export default Loginpage
