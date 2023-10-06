import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./component/Body"
import Footer from "./component/Footer"
import Header from "./component/Header"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Contact from "./component/Contact"
import About from "./component/About"

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const router=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>
    },{
        path:"/about",
        element:<About/>
    },{
        path:"/contact",
        element:<Contact/>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router}/>)