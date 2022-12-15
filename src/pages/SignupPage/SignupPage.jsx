import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'

const SignupPage = () => {

    return (

        <Container className='mb-5'>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Registro</h1>
                    <hr />
                    <SignupForm />

                </Col>
            </Row>

        </Container>
    )
}

export default SignupPage