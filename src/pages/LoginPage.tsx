import React from "react";
import { LoginForm } from "../components/LoginForm";


export function LoginPage() {
   
    return (
        <React.Fragment>
           <div className = "flex items-center justify-center h-screen">
                  <LoginForm/>
           </div>
        </React.Fragment>
    );

}