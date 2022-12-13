import './UserCard.css'
import Card from 'react-bootstrap/Card'

import authService from '../../services/auth.service'
import { AuthContext } from '../../contexts/auth.context'

import Button from "react-bootstrap/Button"

import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'



function UserCard({ user, setRefresh }) {

    const { username, email, role, _id } = user

    const { logoutUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const userDelete = (id) => {

        authService
            .deleteUser(id)
            .then((res) => {
                if (user.role === "ADMIN") {
                    setRefresh(res)

                } else {
                    logoutUser()
                    navigate("/registro")
                }

            })

            .catch(err => console.log(err))
    }

    return (



        <Card className="mb-4 CoasterCard">
            <Card.Body>
                <Card.Title>Nick: {username} </Card.Title>
                <Card.Title>email: {email} </Card.Title>
                <Card.Title>rol: {role} </Card.Title>

            </Card.Body>

            <Card.Body>
                {(user?.role === "USER") &&
                    < div className="d-grid">
                        <Button variant="danger" onClick={() => userDelete(_id)} type="submit">ELIMINAR</Button>
                    </div>

                }
            </Card.Body>

        </Card>

    )

}


export default UserCard