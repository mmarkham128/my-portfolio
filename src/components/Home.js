import React from "react"
import image from "../background5.jpg";

export default function Home(){
    return (
        <main className="h-100px">
            <img src={image} alt="Background" className="absolute object-cover w-screen h-full" />
            <section className=" flex h-screen justify-center">
            <div className=" relative flex justify-center pt-16">
                <h1 className=" text-4xl lg:text-6xl sm:text-7xl text-white cursive leading-none lg:leading-snug ">Michael Markham<br/>Software Developer</h1>
            </div>
            </section>
        </main>
    )
}