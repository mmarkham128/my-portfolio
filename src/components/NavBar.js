import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar(){
    return (
        <header className="bg-black border-b-2 border-yellow-600">
            <div className="container mx-auto flex ">
                <nav className="flex">
                    <NavLink to="/" exact
                    activeClassName="text-white" 
                    className="inline-flex items-center py-0 px-2 mr-4 text-white hover:text-yellow-600 text-4xl font-bold cursive tracking-widest">
                        Michael
                    </NavLink>
                    <NavLink to="/post"
                    activeClassName="text-yellow-600 bg-white"
                    className= "inline-flex items-center py-0 px-3 my-6 rounded text-white hover:text-yellow-600"
                    >
                        Blog Posts
                    </NavLink >
                    <NavLink to="/project"
                    activeClassName="text-yellow-600 bg-white"
                    className= "inline-flex items-center py-0 px-3 my-6 rounded text-white hover:text-yellow-600"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                    activeClassName="text-yellow-600 bg-white"
                    className= "inline-flex items-center py-0 px-3 my-6 rounded text-white hover:text-yellow-600"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-0 px-3 my-6">
                    <SocialIcon url="https://github.com/mmarkham128" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width: 35}} />
                    <SocialIcon url="https://www.facebook.com/ryan.markham.334/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width: 35}} />
                    <SocialIcon url="https://www.linkedin.com/in/mmarkham128/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width: 35}} /> 

                </div>
            </div>
        </header>
    )
}