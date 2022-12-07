import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './HomePage.css'

const HomePage = () => {

    return (
        <Container className="Home">

            <Row>

                <Col md={{ span: 8, offset: 2 }}>

                    <h1>¡Bienvenidos a Multilist!</h1>
                    <hr />
                    <p>La aplicación de listas definitiva</p>
                    <Link to="/listas">
                        <Button variant="dark">Listas públicas</Button>
                    </Link>

                </Col>

            </Row>

        </Container>
    )
}

export default HomePage
