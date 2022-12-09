import { useContext } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import UserCard from "../../components/UserCard/UserCard"

import Loader from "../../components/Loader/Loader" //importar loader


import { AuthContext } from "../../contexts/auth.context"


const UserPage = () => {


    const { user } = useContext(AuthContext) //cojo el contexto del user que me da los datos del user


    return (

        <Container >
            <h1>Perfil de usuario</h1>

            {/* {user.role === "ADMIN" ?
                <Button onClick={openModal} variant="dark" size="sm">Crear lista</Button>
                :
                <></>

            } */}

            <hr />

            {!user ? <Loader /> : <UserCard user={user} />}

            <span className="comeback">
                <Link to="/">
                    <Button variant="dark">Volver a inicio</Button>
                </Link>
            </span>

        </Container>




    )


}

export default UserPage