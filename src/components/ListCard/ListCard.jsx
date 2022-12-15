import './ListCard.css'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import { Modal } from 'react-bootstrap'
import { MessageContext } from '../../contexts/userMessage.context'
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import listsService from '../../services/list.service'

import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import UpdateListForm from '../UpdateListForm/UpdateListForm'

import { useNavigate } from 'react-router-dom'


function ListCard({ list, loadLists }) {

    const { description, tasks, title, imageUrl, type, isPublic, _id, owner } = list

    const { user } = useContext(AuthContext)

    const [lists, setLists] = useState()

    const navigate = useNavigate()

    const { setShowToast, setToastMessage } = useContext(MessageContext)

    const listDelete = (id) => {

        listsService
            .deleteList(id)
            .then(() => {
                setShowToast(true)
                setToastMessage('Lista eliminada')
                loadLists()
            })
            .catch(err => console.log(err))
    }

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        loadLists()
        closeModal()
        navigate('/mis-listas')
    }

    console.log(user?.username)

    return (
        <Card className="bg-light mb-4 ListCard">

            <Card.Body>
                <Card.Title>{title}
                    {(list.isPublic === true) ? " 🌏" : " 🔓"}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{type}
                </Card.Subtitle>
                <Card.Img variant="top" src={imageUrl} />
            </Card.Body>

            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Descripción</Accordion.Header>
                    <Accordion.Body>{description}</Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Tareas</Accordion.Header>
                    <Accordion.Body>{tasks[0]}
                        {/* <Link to="/">
                            <Button variant="dark">Volver a inicio</Button>
                        </Link> */}
                    </Accordion.Body>
                    <Accordion.Body>{tasks[1]}</Accordion.Body>
                    <Accordion.Body>{tasks[2]}</Accordion.Body>
                </Accordion.Item>






            </Accordion>


            {(user?._id === owner) &&
                < div className="d-grid">
                    <Button variant="warning" onClick={openModal} size="sm">ACTUALIZAR</Button>
                </div>

            }


            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar lista</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdateListForm fireFinalActions={fireFinalActions} list={list} />
                </Modal.Body>
            </Modal>


            {(user?.role === "ADMIN" || user?._id === owner) &&

                < div className="d-grid">
                    <Button variant="danger" onClick={() => listDelete(_id)} type="submit">ELIMINAR</Button>
                </div>

            }

        </Card >





    );


}

export default ListCard;