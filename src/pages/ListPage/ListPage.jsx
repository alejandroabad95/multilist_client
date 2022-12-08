import { useState, useEffect } from "react"
import ListCollection from "../../components/ListCollection/ListCollection"
import listsService from "../../services/list.service"

import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ListPage.css'

const ListPage = () => {

    const [lists, setLists] = useState() //cojo el estado de lists

    //uso el servicio de sacar todas las listas
    useEffect(() => {
        listsService
            .getLists()
            .then(({ data }) => setLists(data))
            .catch(err => console.log(err))
    }, [])

    return (

        <>
            <Container >
                <h1>Listas hechas por los usuarios</h1>
                <hr />
                {!lists ? <h1>CARGANDO</h1> : <ListCollection lists={lists} />}

                <span className="comeback">
                    <Link to="/">
                        <Button variant="dark" class="float-right">Volver a inicio</Button>
                    </Link>
                </span>

            </Container>
        </>

    )

}

export default ListPage






