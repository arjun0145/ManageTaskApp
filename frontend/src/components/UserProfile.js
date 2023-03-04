import React, { useState } from 'react'
import { Alert, Button, Container } from 'react-bootstrap'
import NavigationBar2 from './Navigationbar2'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function UserProfile() {

    let data = localStorage.getItem("data")
    data = JSON.parse(data)
    const [userdetail, setUserdetail] = useState(data)
    const navigate = useNavigate()



    const logout = () =>{
        navigate("/")
    }
    return (
        <div>


            <NavigationBar2></NavigationBar2>
            <Container>


                <Alert className='mt-5 text-center'> <b>Welcome {userdetail.name}</b>  </Alert>

                <div>
                    <h5 className='text-center mt-5'>Personal Details </h5>
                    <p className='mx-5'>Name - <span> {userdetail.name}</span></p>
                    <p className='mx-5'>Email - <span> {userdetail.email}</span></p>
                    <p className='mx-5'>Age - <span> {userdetail.age}</span></p>
                    <p className='mx-5'>Gender- <span> {userdetail.gender}</span></p>
                </div>


                <Container className='text-center'>

                    <Button className='mx-3'> Edit Personal Details </Button>
                    <Button className='mx-3'> Change Password </Button>
                    
                    <Button className='mx-3' onClick={logout}> Logout </Button>
                    

                </Container>




            </Container>

        </div>
    )
}

export default UserProfile
