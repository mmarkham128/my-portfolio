import React from "react"
import image from "../background2.jpg";

export default function Home(){
    return (
        <main className="h-100px">
            <img src={image} alt="Background" className="absolute object-cover w-screen h-full" />
            <section className="relative flex justify-center min-h-screen pt-0 lg:pt-5 px-8">
                <h1 className="text-6xl text-yellow-600 font-bold cursive leading-none lg:leading-snug home-name">Michael Markham<br/><br/><br/> Software Developer</h1>
            </section>
        </main>
    )
}