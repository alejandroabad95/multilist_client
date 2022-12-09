import './UserCard.css'
import Card from 'react-bootstrap/Card'

function UserCard({ user }) {
    const { username, email, role } = user
    console.log(username, email, role)

    return (
        <Card className="mb-4 CoasterCard">
            <Card.Body>
                <Card.Title>Nick: {username} </Card.Title>
                <Card.Title>email: {email} </Card.Title>
                <Card.Title>rol: {role} </Card.Title>
            </Card.Body>
        </Card>

    )

}


export default UserCard