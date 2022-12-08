import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ListPage from "../pages/ListPage/ListPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LoginPage/LoginPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listas" element={<ListPage />} />
            <Route path="/usuarios" element={<p>Usuarios</p>} />
            <Route path="/usuarios/:id" element={<p>Detalles de usuario</p>} />
            <Route path="/mis-listas" element={<p>Mis listas</p>} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />
            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    )
}


export default AppRoutes