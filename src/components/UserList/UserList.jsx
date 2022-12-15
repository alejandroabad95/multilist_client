import './UserList.css'
import UserCard from '../UserCard/UserCard'
import { AuthContext } from "../../contexts/auth.context"

import { useContext } from 'react'

import { Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'




const UserList = ({ users, setRefresh }) => {

    const { user } = useContext(AuthContext)


    return (

        <>
            <Row>
                {users.map(userData => {

                    return (
                        <Row sm={{ span: 4 }} key={userData._id} >
                            <UserCard userData={userData} setRefresh={setRefresh} />
                        </Row>
                    )

                })}




            </Row>
        </>

    )

}

export default UserList