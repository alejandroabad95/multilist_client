import './ListCard.css'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import { Link, useRouteLoaderData } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import listsService from '../../services/list.service'
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'


function ListCard({ list, setRefresh }) {

    const { description, tasks, title, imageUrl, type, _id, owner } = list

    const listDelete = (id) => {

        listsService
            .deleteList(id)
            .then((res) => {
                setRefresh(res)

            })

            .catch(err => console.log(err))
    }

    // -----------------------------------------------------------------------


    const { user } = useContext(AuthContext)

    return (
        <Card className="bg-light mb-4 ListCard">

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{type}</Card.Subtitle>
                <Card.Img variant="top" src={imageUrl} />
            </Card.Body>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Descripción</Accordion.Header>
                    <Accordion.Body>{description}</Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
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

            {(user?.role === "ADMIN" || user?._id === owner) &&

                < div className="d-grid">
                    <Button variant="danger" onClick={() => listDelete(_id)} type="submit">ELIMINAR</Button>
                </div>

            }


        </Card >





    );
}

export default ListCard;