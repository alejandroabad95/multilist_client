import { useContext } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import UserCard from "../../components/UserCard/UserCard"

import Loader from "../../components/Loader/Loader" //importar loader


import { AuthContext } from "../../contexts/auth.context"

import { useState } from "react"


const UserPage = () => {

    const { user } = useContext(AuthContext) //cojo el contexto del user que me da los datos del user

    //Refresh nuevo
    const [refresh, setRefresh] = useState(null)

    return (

        <Container className="mb-5" >
            <h1>Bienvenido {user.username} 🙂</h1>
            <span>
                <Link to="/">
                    <Button variant="dark">Volver a inicio</Button>
                </Link>
            </span>
            <hr />

            {!user ? <Loader /> : <UserCard userData={user} setRefresh={setRefresh} />}



        </Container>

    )


}

export default UserPage