import { useState, useEffect, useContext } from "react"
import { Container, Button } from 'react-bootstrap'
import { Link, Outlet, Navigate } from 'react-router-dom'

//import services
import authService from '../../services/auth.service'

//import components
import UserList from "../../components/UserList/UserList"

import Loader from "../../components/Loader/Loader"

import { AuthContext } from '../../contexts/auth.context'




const UserListPage = () => {

    const [users, setUsers] = useState() //cojo el estado de los Users

    const { user } = useContext(AuthContext) //cojo el contexto del usuario para ver si soy admin

    //constante de refrescar

    const [refresh, setRefresh] = useState(null)



    //uso el servicio de sacar todos los users
    useEffect(() => {
        loadUsers()
    }, [refresh])



    const loadUsers = () => {
        authService
            .getUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }


    return (


        user.role === "ADMIN" ?

            < Container>
                < h1 > Lista de usuarios</h1 >
                <span>
                    <Link to="/">
                        <Button variant="dark" size="md">Volver a inicio</Button>
                    </Link>
                </span>
                <hr />
                {!users ? <Loader /> : <UserList users={users} setRefresh={setRefresh} />}

            </Container >
            :
            <>

                <Navigate to={`/usuarios/${user._id}`} />

            </>


    )

}

export default UserListPage