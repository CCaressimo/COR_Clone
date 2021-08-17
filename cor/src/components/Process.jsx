import React from 'react'
import "./css/Process.css"
import { NavLink } from "react-router-dom"

import Person from "./images/person.svg"
import Coffee from "./images/coffee.svg"
import gradCap from "./images/gradCap.svg"
import People from "./images/people.svg"

export default function Process() {
    return (
        <main>
            <section>
                <div>
                    <div className="backgroundP flex flex-col items-center pt-6 sm:pt-12">
                        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                            <h1 className="titleFont text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold leading-tight">Our Process
                            </h1>
                        </div>
                        <div>
                            <h3 class="textFont px-4 md:px-8 pb-6 container sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center font-bold leading-tight">Our process takes place <span className="highlightedFont">under one roof</span> in the most dangerous zip code in Atlanta. The needs are great but when likeminded community members, organizations, and volunteers partner together we are able to see amazing things happen.</h3>
                        </div>
                        <div class="grid grid-cols-4 gap-4 px-12">
                            <div>
                                <div className="p-6">
                                    <img className="mx-auto w-1/2 md:w-1/3 py-7" src={Person} alt="" />
                                    <h1 className="highlightedFont text-center font-bold leading-tight">1. PEOPLE IN CRISIS</h1>
                                    <h3 className="textFont container text-center font-bold leading-tight">Crime, disease, lack of opportunity.</h3>
                                </div>
                            </div>
                            <div>
                                <div className="p-6">
                                    <img className="mx-auto w-1/2 md:w-1/3 py-6" src={Coffee} alt="" />
                                    <h1 className="highlightedFont text-center font-bold leading-tight">2. RECEIVE HELP</h1>
                                    <h3 className="textFont container text-center font-bold leading-tight">Food, housing, emergency healthcare.</h3>
                                </div>
                            </div>
                            <div>
                                <div className="p-6">
                                    <img className="mx-auto w-1/2 md:w-1/3 py-7" src={gradCap} alt="" />
                                    <h1 className="highlightedFont text-center font-bold leading-tight">3. LEARN NEW SKILLS</h1>
                                    <h3 className="textFont container text-center font-bold leading-tight">Education, job training, financial literacy.</h3>
                                </div>
                            </div>
                            <div >
                                <div className="p-6">
                                    <img className="mx-auto w-1/2 md:w-1/3 py-10" src={People} alt="" />
                                    <h1 className="highlightedFont text-center font-bold leading-tight">4. THRIVE IN COMMUNITY
                                    </h1>
                                    <h3 className="textFont container text-center font-bold leading-tight">New jobs, stronger families, local opportunities.</h3>
                                </div>
                            </div>
                        </div>
                        <div class="px-6 mx-auto items-center pt-20 pb-12">
                            <div class="w-full overflow-y-hidden px-4">
                                <div className="text-center py-6">
                                    <NavLink
                                    to="/programs" 
                                    class="buttons px-3 sm:px-6 py-2 sm:py-3 text-sm ml-3 sm:ml-6 text-white font-bold leading-tight">OUR PROGRAMS & ON-SITE PARTNERS</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>        
    )
}
