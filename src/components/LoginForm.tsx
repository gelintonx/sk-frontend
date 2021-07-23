import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useState } from "react";
import {Link, useHistory} from 'react-router-dom';
import { LoginServiceKey } from "../services/User/LoginKeyService";

export function LoginForm() {
    
    const history = useHistory();
    const [state,setState] = useState({});

    const handleInputChange: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        setState(
            {
                "username": value
            }
        );
    }
    
    const handleSubmit: FormEventHandler = async (event: FormEvent) => {
        event?.preventDefault();
        if (Object.keys(state).length === 0) {
            alert('Username is invalid. Insert a valid username');
        }
        else {
            const service: LoginServiceKey = new LoginServiceKey(
                'https://127.0.0.1:5000/create-challenge-assertion',
                'https://127.0.0.1:5000/verify-challenge-assertion'
            );
            const response = await service.call(state);
            if (response.response.verified) {
                history.push('/home');
            } else {
                alert('User not looged in');
            }         

        }
        
    }
    
    
    return(

        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
            <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">SK-Example</h2>
    
            <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>
    
            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>
    
            <form onSubmit={handleSubmit} >
                <div className="w-full mt-4">
                    <input name = "username" onChange={handleInputChange} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text" placeholder="Username" aria-label="Email Address"/>
                </div>
    
                
    
                <div className="flex items-center justify-between mt-4">
                    <button className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    
        <div className="flex items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
            
            <Link to="/signup" className="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500">Register</Link>
           
        </div>
    </div>
    
    );
}