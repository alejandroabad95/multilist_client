import './ListPage.css'

import { useState, useEffect, useContext } from "react"
import { Container, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import ListCollection from "../../components/ListCollection/ListCollection"
import listsService from "../../services/list.service"

import NewListForm from "../../components/NewListForm/NewListForm"

import Loader from "../../components/Loader/Loader"

import { AuthContext } from '../../contexts/auth.context'



const ListPage = () => {

    const [lists, setLists] = useState() //cojo el estado de lists

    const [showModal, setShowModal] = useState(false)


    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)



    const { user } = useContext(AuthContext)

    //uso el servicio de sacar todas las listas
    useEffect(() => {
        loadLists()
    }, [])


    const loadLists = () => {
        listsService
            .getLists()
            .then(({ data }) => setLists(data))
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {

        loadLists()
        closeModal()

    }


    return (

        <>
            <Container className='listPage'>
                <h1>Listas hechas por los usuarios</h1>

                {user ?
                    <Button onClick={openModal} variant="success" size="md">Crear lista</Button>
                    :
                    <></>

                }

                <span>
                    <Link to="/">
                        <Button variant="dark" size="md">Volver a inicio</Button>
                    </Link>
                </span>

                <hr />
                {!lists ? <Loader /> : <ListCollection loadLists={loadLists} lists={lists} />}


            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva lista</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewListForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

        </>

    )

}

export default ListPage






