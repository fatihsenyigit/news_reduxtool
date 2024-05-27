import { BrowserRouter, Route, Routes } from "react-router-dom"
import PrivateRouter from "./PrivateRouter"
import Login from "../pages/Login"
import News from '../pages/News'
import Navbar from "../components/Navbar"


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<PrivateRouter/>}>
                <Route path="" element={<News/>} />
            </Route>
            <Route path="login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter