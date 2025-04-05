
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter,RouterProvider } from "react-router";
import Login from "../components/login/Login";
import Register from "../components/register/Register"


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
        },
        {
          path:'/login',
          element: <div className="login_container"><Login/></div> 
        },
        {
          path:'/register',
          element:<div className="register_container"><Register/></div>
        }
       
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
<RouterProvider router={router}/>

)