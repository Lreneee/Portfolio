import React from 'react';
import '../index.css'

import tinyHouseImage from "../assets/images/tinyhouse.jpeg"
import modumImage from '../assets/images/img.png'
import hospitalHeroImage from "../assets/images/Group 17.svg"
import SMARTFruitschaalImage from "../assets/images/SmartWeegschaal.svg"
import moestuinImage from "../assets/images/moestuin.jpg"

const projects = () => {
    return (
        <section className="container px-4 md:mx-auto flex flex-col undefined pt-12 lg:max-w-6xl">
            <section className="lg:flex lg:flex-row lg:-mx-2 flex-wrap">
                <div className="mb-6 w-full lg:w-1/3 lg:px-2">
                    <figure
                        className="h-48 lg:h-64 transition-all duration-300 flex-none bg-cover overflow-hidden relative rounded-t-lg">
                        <img className="w-full h-full" src={hospitalHeroImage} alt="Project"/>
                    </figure>
                    <div className="bg-gray-100 rounded-b-lg">
                        <a href="https://www.hospitalhero.nl/" target="_blank"><h1 className="text-center text-2xl p-4 hover:underline">Hospital Hero</h1></a>
                        <div className="text-center">
                            <span className="rounded-full inline-block border-2 border-gray-300 p-1 mb-4"><p
                                className="mx-2">Swift</p></span>
                            <span className="rounded-full inline-block border-2 border-gray-300 p-1 ml-2 mb-4"><p
                                className="mx-2">Mei 2021</p></span>
                        </div>
                    </div>
                </div>
                <div className="mb-4 w-full lg:w-1/3 lg:px-2">
                    <figure
                        className="h-48 lg:h-64 transition-all duration-300 flex-none bg-cover overflow-hidden relative rounded-t-lg">
                        <img className="w-full h-full object-contain" src={modumImage} alt="Project"/>
                    </figure>
                    <div className="bg-gray-100 rounded-b-lg">
                        <h1 className="text-center text-2xl p-4">Modum</h1>
                        <div className="text-center">
                            <span className="rounded-full inline-block border-2 border-gray-300 p-1 mb-4"><p
                                className="mx-2">Flutter</p></span>
                            <span className="rounded-full inline-block border-2 border-gray-300 p-1 ml-2 mb-4"><p
                                className="mx-2">November 2020</p></span>
                        </div>
                    </div>
                </div>
                <div className="mb-4 w-full lg:w-1/3 lg:px-2">
                    <figure
                        className="h-48 lg:h-64 transition-all duration-300 flex-none bg-cover overflow-hidden relative rounded-t-lg">
                        <img className="w-full h-full object-cover" src={tinyHouseImage} alt="Project"/>
                    </figure>
                    <div className="bg-gray-100 rounded-b-lg">
                        <a href="https://thefield.collaby.net/" target="_blank"><h1 className="text-center text-2xl p-4 hover:underline">The Field</h1></a>
                        <div className="text-center">
                            <span className="rounded-full inline-block border-2 border-gray-300 p-1 mb-4"><p
                                className="mx-2">Laravel</p></span>
                            <span className="rounded-full inline-block border-2 border-gray-300 p-1 ml-2 mb-4"><p
                                className="mx-2">React</p></span>
                            <span className="rounded-full inline-block border-2 border-gray-300 p-1 ml-2 mb-4"><p
                                className="mx-2">Juli 2020</p></span>
                        </div>
                    </div>
                </div>
                <div className="mb-6 w-full lg:w-1/3 lg:px-2">
                    <figure
                        className="h-48 lg:h-64 transition-all duration-300 flex-none bg-cover overflow-hidden relative rounded-t-lg">
                        <img className="w-full h-full object-cover" src={moestuinImage} alt="Project"/>
                    </figure>
                    <div className="bg-gray-100 rounded-b-lg">
                        <h1 className="text-center text-2xl p-4">Moestuin app</h1>
                        <div className="text-center">
                            <span className="rounded-full inline-block border-2 border-gray-300 p-1 mb-4"><p
                                className="mx-2">Android</p></span>
                            <span className="rounded-full inline-block border-2 border-gray-300 p-1 ml-2 mb-4"><p
                                className="mx-2">Java</p></span>
                            <span className="rounded-full inline-block border-2 border-gray-300 p-1 ml-2 mb-4"><p
                                className="mx-2">Juli 2020</p></span>
                        </div>
                    </div>
                </div>
                <div className="mb-6 w-full lg:w-1/3 lg:px-2">
                    <figure
                        className="h-48 lg:h-64 transition-all duration-300 flex-none bg-cover overflow-hidden relative rounded-t-lg">
                        <img className="w-full h-full object-cover" src={SMARTFruitschaalImage} alt="Project"/>
                    </figure>
                    <div className="bg-gray-100 rounded-b-lg">
                        <h1 className="text-center text-2xl p-4">SMART Fruitschaal</h1>
                        <div className="text-center">
                            <span className="rounded-full inline-block border-2 border-gray-300 p-1 mb-4"><p
                                className="mx-2">Mei 2020</p></span>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default projects;