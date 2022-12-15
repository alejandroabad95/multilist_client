import './UserList.css'
import UserCard from '../UserCard/UserCard'
import { AuthContext } from "../../contexts/auth.context"

import { useContext } from 'react'

import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'




const UserList = ({ users, setRefresh }) => {

    const { user } = useContext(AuthContext)


    return (

        <>
            <Row className='mb-4'>
                <Col sm={{ span: 15 }}>
                    {users.map(userData => {

                        return (
                            <Row key={userData._id} >
                                <UserCard userData={userData} setRefresh={setRefresh} />
                            </Row>
                        )

                    })}
                </Col>
            </Row>
        </>

    )

}

export default UserList