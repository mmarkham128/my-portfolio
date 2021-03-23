import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar(){
    return (
        <header className="bg-gray-450 border-b-2 border-blue-550">
            <div className="container mx-auto flex ">
                <nav className="flex">
                    <NavLink to="/" exact
                    activeClassName="text-white" 
                    className=" text-sm sm:text-6xl inline-flex items-center sm:py-0 sm:px-2 sm:mr-4 mr-4 text-white hover:text-blue-650 font-bold cursive tracking-widest">
                        Michael
                    </NavLink>
                    <NavLink to="/post"
                    activeClassName="text-blue-650"
                    className= "text-xs  sm:text-2xl inline-flex items-center sm:py-0 sm:px-3 sm:my-6 mr-2 rounded text-white hover:text-blue-650"
                    >
                        Blog Posts
                    </NavLink >
                    <NavLink to="/project"
                    activeClassName="text-blue-650"
                    className= "text-xs sm:text-2xl inline-flex items-center sm:py-0 sm:px-3 sm:my-6 mr-2 rounded text-white hover:text-blue-650"
                    >
                        Projects
                    </NavLink>
                    
                </nav>
                <div className="inline-flex  sm:py-0 sm:px-3 sm:my-6">
                    <SocialIcon url="https://github.com/mmarkham128" className="sm:mr-4 hover:opacity-50" target="_blank" fgColor="#fff" style={{ height:30, width: 30}} />
                    <SocialIcon url="https://www.facebook.com/ryan.markham.334/" className="sm:mr-4 hover:opacity-50" target="_blank" fgColor="#fff" style={{ height:30, width: 30}} />
                    <SocialIcon url="https://www.linkedin.com/in/mmarkham128/" className="sm:mr-4 hover:opacity-50" target="_blank" fgColor="#fff" style={{ height:30, width: 30}} /> 

                </div>
            </div>
        </header>
    )
}