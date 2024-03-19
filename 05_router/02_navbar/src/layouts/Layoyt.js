import Header from "../component/Header";
import Navbar from "../component/navbar";
import { Outlet } from "react-router-dom";

function Layout(){

    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout;