import './UserList.css'
import UserCard from '../UserCard/UserCard'

import { Row, Col } from 'react-bootstrap'

const UserList = ({ users }) => {


    return (

        <>
            <Row>
                {users.map(user => {

                    return (
                        <Col sm={{ span: 4 }} key={user._id} >
                            <UserCard user={user} />
                        </Col>
                    )

                })}
            </Row>
        </>

    )

}

export default UserList