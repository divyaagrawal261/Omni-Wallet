import React from "react";
import "./notFound.css"

function NotFound(){
    return(
        <div className="w-100 h-screen text-center flex flex-col">
                <h1 className="lg:text-custom-large md:text-cutom-large text-medium font-bold">404</h1>
                <h1 className="lg:text-custom md:text-cutom text-5xl font-bold">Page Not Found!</h1>
        </div>
    )
}

export default NotFound;