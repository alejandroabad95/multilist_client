import './PersonalListPage.css'

import { useState, useEffect, useContext } from "react"
import { Container, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import ListCollection from "../../components/ListCollection/ListCollection"
import listsService from "../../services/list.service"

import NewListForm from "../../components/NewListForm/NewListForm"

import Loader from "../../components/Loader/Loader"

import { AuthContext } from '../../contexts/auth.context'




const PersonalListPage = () => {

    const [lists, setLists] = useState()

    const [showModal, setShowModal] = useState(false)


    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)



    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadLists()
    }, [])

    const loadLists = () => {
        listsService
            .getUserLists()
            .then(({ data }) => setLists(data))
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {

        loadLists()
        closeModal()
    }


    return (

        <>
            <Container >
                <h1>Mis listas</h1>

                <Button onClick={openModal} variant="dark" size="sm">Crear lista</Button>

                <hr />

                {!lists ? <Loader /> : <ListCollection loadLists={loadLists} lists={lists} />}


                <span className="comeback">
                    <Link to="/">
                        <Button variant="dark" className="float-right">Volver a inicio</Button>
                    </Link>
                </span>

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

export default PersonalListPage

