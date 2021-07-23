import React from "react";
import { RegisterForm } from "../components/RegisterForm";

export function RegisterPage() {

    return (
        <React.Fragment>
           <div className = "flex items-center justify-center h-screen">
                  <RegisterForm/>
           </div>
        </React.Fragment>
    );

}