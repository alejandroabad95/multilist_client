import './UserCard.css'
import Card from 'react-bootstrap/Card'

import authService from '../../services/auth.service'
import Button from "react-bootstrap/Button"


function UserCard({ user, setRefresh }) {

    const { username, email, role, _id } = user

    //Eliminar usuario

    const userDelete = (id) => {

        authService
            .deleteUser(id)
            .then((res) => {
                setRefresh(res)
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