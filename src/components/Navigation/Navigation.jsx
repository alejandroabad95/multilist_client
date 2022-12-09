import { useContext } from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'


const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)


    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="mb-5">
            <Container>
                <Link to="/">
                    <Navbar.Brand as="div">📋 Multilist</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Link to="/listas">
                            <Nav.Link as="div">Listas</Nav.Link>
                        </Link>

                        {user ?
                            <>

                                <Link to="/*">
                                    <Nav.Link as="div">Mis listas</Nav.Link>
                                </Link>

                                <Link to={`/usuarios/${user._id}`}>
                                    <Nav.Link as="div">Perfil</Nav.Link>
                                </Link>

                                <Nav.Link as="div" onClick={logoutUser}>Cerrar sesión</Nav.Link>

                            </>
                            :
                            <>
                                <Link to="/registro">
                                    <Nav.Link as="div">Registro</Nav.Link>
                                </Link>

                                <Link to="/iniciar-sesion">
                                    <Nav.Link as="div">Acceder</Nav.Link>
                                </Link>
                            </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation


