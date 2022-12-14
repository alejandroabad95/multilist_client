import { useState, useContext } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import listsService from "../../services/list.service"

import uploadServices from "../../services/upload.service"

import ErrorMessage from "../ErrorMessage/ErrorMessage"

import { MessageContext } from "../../contexts/userMessage.context"


// import { MessageContext } from '../../contexts/userMessage.context'

const UpdateListForm = ({ fireFinalActions, list }) => {

    const { imageUrl, title, type, description, isPublic, tasks, _id } = list

    const [listDataUpdate, setListDataUpdate] = useState({

        imageUrl: '',
        title: title,
        type: type,
        description: description,
        isPublic: isPublic,
        tasks: tasks

    })
    console.log('las tareas!', listDataUpdate.tasks)
    const [loadingImage, setLoadingImage] = useState(false)

    const [errors, setError] = useState([])


    const handleInputChange = e => {
        const { name, value, checked } = e.target
        setListDataUpdate({ ...listDataUpdate, [name]: name === 'isPublic' ? checked : value })
    }

    const handleTasksInputs = (e, index) => {
        const { value } = e.target
        const tasksCopy = [...listDataUpdate.tasks]
        tasksCopy[index] = value

        setListDataUpdate({ ...listDataUpdate, tasks: tasksCopy })
    }

    const { setShowToast, setToastMessage } = useContext(MessageContext)

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setListDataUpdate({ ...listDataUpdate, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }

    const handleFormUpdate = e => {

        e.preventDefault()

        listsService
            .updateList(_id, listDataUpdate)
            .then(() => {
                setShowToast(true)
                setToastMessage('Lista actualizada')
                fireFinalActions()
            })
            .catch(err => setError(err.response.data.errorMessages))
    }



    return (

        <Form onSubmit={handleFormUpdate}>

            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" value={listDataUpdate.title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="type">
                <Form.Label>Tipo de lista</Form.Label>
                <Form.Control type="text" value={listDataUpdate.type} onChange={handleInputChange} name="type" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={listDataUpdate.description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Check
                label="Lista pública?"
                type="switch"
                id="custom-switch"
                checked={listDataUpdate.isPublic}
                onChange={handleInputChange}
                name='isPublic'
            />

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="task1">
                <Form.Label>Tarea 1</Form.Label>
                <Form.Control type="text" value={listDataUpdate.tasks[0]} onChange={(e) => handleTasksInputs(e, 0)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="task2">
                <Form.Label>Tarea 2</Form.Label>
                <Form.Control type="text" value={listDataUpdate.tasks[1]} onChange={(e) => handleTasksInputs(e, 1)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="task3">
                <Form.Label>Tarea 3</Form.Label>
                <Form.Control type="text" value={listDataUpdate.tasks[2]} onChange={(e) => handleTasksInputs(e, 2)} />
            </Form.Group>

            {errors.length ? <ErrorMessage>{errors.map(elm => <p style={{ color: 'red' }}> {elm}</p>)}</ErrorMessage> : undefined}

            <div className="d-grid">
                <Button variant="dark" type="submit">Actualizar lista</Button>
            </div>
        </Form>
    )
}

export default UpdateListForm