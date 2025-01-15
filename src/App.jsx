import './components/todo/todo.css'

import Header from "./layout/header.jsx";
import Footer from "./layout/footer.jsx";
import {Outlet} from "react-router-dom";




const App = () => {


    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App
