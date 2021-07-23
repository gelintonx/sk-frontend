import React from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import '../styles/HomePage.css';


export function HomePage() {

    return(
        <React.Fragment>
            <Navbar/>
            <div className="homepage">
                <div className="flex items-center justify-evenly mt-4">
                    <h1 className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Welcome Fulanito</h1>
                </div>
                <PostCard/>
                <PostCard/>
                <PostCard/>     
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
        </React.Fragment>
    );
}