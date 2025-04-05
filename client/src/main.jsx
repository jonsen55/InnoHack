
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter,RouterProvider } from "react-router";
// import Home from "./components/Home";
// import Gallery from "./components/Gallery/Gallery";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>,
    
            children:[
                
                {
                    path:"/contacts",
                    element:"",
                },{
                    path:"/about",
                    element:"",
                },{
                    path:"/gallery",
                    element:"",
                },
                {
                    index:true,
                    element:""
                }
            ]
        }
       
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
<RouterProvider router={router}/>

)