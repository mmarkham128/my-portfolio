import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";

export default function Project(){
    const [projectData, setProjectData] = useState(null);
    
    useEffect(()=> {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then((data)=> setProjectData(data,console.log(data)))
        .catch(console.error)
    }, [])
    
    return (
        <main className="bg-black min-h-screen p-12">
            <section className=" container mx-auto">
                <h1 className=" text-white text-5xl flex justify-center cursive"> My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my projects page!</h2>
                
                <section className=" grid grid-cols-2 gap-8">
                {projectData && projectData.map((project, index) =>(
                    <article className="relative rounded-lg shadow-xl bg-black border-2 sm:p-16 mx-auto">
                    
                        <h3 className="text-white sm:text-3xl font-bold mb-2 hover:text-blue-650">
                            <a href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer">
                                    {project.title}
                                    </a>
                        </h3>
                        <div className=" text-white text-xs sm:space-x-4">
                        
                            <span>
                                <strong className=" font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                            <strong className="ml-2 font-bold">Company</strong>:{" "}
                            {project.place}
                            </span>
                            <span>
                            <strong className="ml-2 font-bold">Type</strong>:{" "}
                            {project.projectType}
                            </span>
                            <p className="my-6 text-lf text-white leading-relaxed pb-4 lg:h-24">
                            {project.description}
                            </p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank"
                            className="text-white font-bold hover:underline hover:text-blue-650">
                                View The Project {""}
                            <span role="img" aria-label="right pointer">
                                👉<img src={project.mainImage.asset.url}
                                 alt={project.mainImage.alt}
                                 className="w-full h-auto max-h-72 rounded-r object-contain hover:opacity-50 pt-2 border-2"  
                            />
                            </span>
                            </a>
                            <span>
                            <strong className="ml-2 font-bold">Uses</strong>:{" "}
                                {project.tags}
                            </span>
                        </div>
                        
                    </article>
                    ))}
                </section>
                
            </section>
        </main>
    )
}