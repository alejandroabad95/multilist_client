import { useState, useContext } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import listsService from "../../services/list.service"

import uploadServices from "../../services/upload.service"


// import { MessageContext } from '../../contexts/userMessage.context'

const NewListForm = ({ fireFinalActions }) => {

    const [listData, setListData] = useState({

        imageUrl: '',
        title: '',
        type: 'Daily',
        description: '',
        public: 'false',
        task1: '',
        task2: '',
        task3: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)


    const handleInputChange = e => {
        const { name, value } = e.target
        setListData({ ...listData, [name]: value })
    }

    // const { setShowToast, setToastMessage } = useContext(MessageContext)

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
                // setShowToast(true)
                // setToastMessage('Lista creada')
                fireFinalActions()
            })
            .catch(err => console.error(err))
    }

    const { imageUrl, title, type, description, task1, task2, task3 } = listData


    return (


        // cambiar formulario 1imageUrl,2title,3type,4description,5public,6task1,7task2,8task3

        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="type">
                <Form.Label>Tipo de lista</Form.Label>
                <Form.Control type="text" value={type} onChange={handleInputChange} name="type" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
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

            <div className="d-grid">
                <Button variant="dark" type="submit">Crear lista</Button>
            </div>
        </Form>
    )
}

export default NewListForm