import React from "react"
import image from "../background2.jpg";

export default function Home(){
    return (
        <main className="h-100px">
            <img src={image} alt="Background" className="absolute object-cover w-screen h-full" />
            <section className="space-y-96 lg:space-y-92 sm:space-y-72 md:space-y-96 xl:space-y-64">
            <div className=" relative flex justify-center pt-16 sm:pt-24 xl:pt-12 lg:pt-48 md:pt-36 px-8">
                <h1 className=" text-3xl lg:text-7xl sm:text-7xl text-yellow-500 font-bold cursive leading-none lg:leading-snug ">Michael Markham</h1>
            </div>
            <div className=" relative flex justify-center pt-6 xl:pt-16 lg:pt-40 md:pt-8 px-8">
                <h2 className=" text-3xl lg:text-7xl sm:text-7xl text-yellow-500 font-bold cursive leading-none lg:leading-snug ">Software Developer</h2>
            </div>
            </section>
        </main>
    )
}