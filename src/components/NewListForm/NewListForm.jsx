import { useState, useContext } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import listsService from "../../services/list.service"

import uploadServices from "../../services/upload.service"

import ErrorMessage from "../ErrorMessage/ErrorMessage"
import { MessageContext } from '../../contexts/userMessage.context'

const NewListForm = ({ fireFinalActions }) => {

    const [listData, setListData] = useState({

        imageUrl: '',
        title: '',
        type: 'Daily',
        description: '',
        isPublic: false,
        task1: '',
        task2: '',
        task3: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const [errors, setError] = useState([])

    const { setShowToast, setToastMessage } = useContext(MessageContext)

    const handleInputChange = e => {
        const { name, value, checked } = e.target
        setListData({ ...listData, [name]: name === 'isPublic' ? checked : value })
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setListData({ ...listData, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        listsService
            .createList(listData)
            .then(() => {
                setShowToast(true)
                setToastMessage('Lista creada en la BBDD')
                fireFinalActions()
            })
            .catch(err => setError(err.response.data.errorMessages))
    }

    const { imageUrl, title, type, description, isPublic, task1, task2, task3 } = listData

    return (

        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="type">
                <Form.Label>Tipo de lista</Form.Label>
                <Form.Control as="select" type="text" value={type} onChange={handleInputChange} name="type">
                    <option value="Daily">Daily</option>
                    <option value="Health">Health</option>
                    <option value="Social">Social</option>
                    <option value="Hobbies">Hobbies</option>
                    <option value="Work">Work</option>
                    <option value="Finance">Finance</option>
                </Form.Control>

            </Form.Group>

            <Form.Check
                label="¿Lista pública?"
                type="switch"
                id="custom-switch"
                checked={isPublic}
                onChange={handleInputChange}
                name='isPublic'
            />

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" as="textarea" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>



            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="task1">
                <Form.Label>Tarea 1</Form.Label>
                <Form.Control type="text" value={task1} onChange={handleInputChange} name="task1" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="task2">
                <Form.Label>Tarea 2</Form.Label>
                <Form.Control type="text" value={task2} onChange={handleInputChange} name="task2" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="task3">
                <Form.Label>Tarea 3</Form.Label>
                <Form.Control type="text" value={task3} onChange={handleInputChange} name="task3" />
            </Form.Group>

            {errors.length ? <ErrorMessage>{errors.map(elm => <p style={{ color: 'red' }}> {elm}</p>)}</ErrorMessage> : undefined}


            <div className="d-grid">
                <Button variant="dark" type="submit">Crear lista</Button>
            </div>
        </Form >
    )
}

export default NewListForm