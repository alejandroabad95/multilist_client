import './UserList.css'
import UserCard from '../UserCard/UserCard'
import { AuthContext } from "../../contexts/auth.context"

import { useContext } from 'react'

import { Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'




const UserList = ({ users }) => {

    const { user } = useContext(AuthContext)

    return (

        <>
            <Row>
                {users.map(user => {

                    return (
                        <Row sm={{ span: 4 }} key={user._id} >
                            <UserCard user={user} />
                        </Row>
                    )

                })}




            </Row>
        </>

    )

}

export default UserList