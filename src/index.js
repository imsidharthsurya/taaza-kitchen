import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./component/Body"
import Footer from "./component/Footer"
import Header from "./component/Header"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Contact from "./component/Contact"
import About from "./component/About"
import Error from "./component/Error"
import RestrauntDetails from "./component/RestrauntDetails"

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const router=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },{
                path:"/contact",
                element:<Contact/>
            },{
                path:"/restraunt/:id",
                element:<RestrauntDetails/>
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router}/>)