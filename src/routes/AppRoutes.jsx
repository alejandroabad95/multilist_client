import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ListPage from "../pages/ListPage/ListPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import UserPage from "../pages/UserPage/UserPage"
import PersonalListPage from "../pages/PersonalListPage/PersonalListPage"
import UserListPage from "../pages/UserListPage/UserListPage"


import PrivateRoute from "./PrivateRoute"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listas" element={<ListPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />

            <Route element={<PrivateRoute />}>

                <Route path="/usuarios/:id" element={<UserPage />} />
                <Route path="/mis-listas" element={<PersonalListPage />} />
                <Route path="/usuarios" element={<UserListPage />} />

            </Route>

            <Route path="/*" element={<h1>404</h1>} />

        </Routes>



    )
}


export default AppRoutes