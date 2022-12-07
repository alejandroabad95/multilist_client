import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ListPage from "../pages/ListPage/ListPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listas" element={<ListPage />} />
            <Route path="/usuarios" element={<p>Usuarios</p>} />
            <Route path="/usuarios/:id" element={<p>Detalles de usuario</p>} />
            <Route path="/mis-listas" element={<p>Mis listas</p>} />
            <Route path="/registro" element={<p>Registrarse</p>} />
            <Route path="/iniciar-sesion" element={<p>Iniciar sesión</p>} />
            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes