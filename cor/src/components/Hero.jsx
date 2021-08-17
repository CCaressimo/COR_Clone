import React from 'react'
import { NavLink } from "react-router-dom"
import "./css/Hero.css"

export default function Hero() {
    return (
        <main>
            <section>
                <div>
                    <div class="bg-gray-800 flex flex-col items-center pt-12 sm:pt-24">
                        <div class="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">LIGHT. HOPE. TRANSFORMATION.</h1>
                        </div>
                        <div>
                            <h3 class="px-12 md:px-36 pb-6 container sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center text-white font-bold leading-tight">City of Refuge is a faith-based environment that helps individuals and families transition out of crisis. </h3>
                        </div>
                        <div class="px-6 mx-auto items-center">
                            <div class="w-full overflow-y-hidden px-4">
                                <div className="text-center py-6">
                                    <NavLink
                                    to="https://vimeo.com/333813246" class="buttons px-3 sm:px-6 py-2 sm:py-3 text-sm ml-3 sm:ml-6 text-white font-bold leading-tight">WATCH VIDEO</NavLink>
                                </div>
                            </div>
                        </div>
                        <div class="px-6 mx-auto items-center">
                            <div class="w-full overflow-y-hidden px-4">
                                <div className="text-center py-6">
                                    <NavLink
                                    to="https://give.cityofrefugeatl.org/give/270004/#!/donation/checkout" 
                                    class="buttons px-3 sm:px-6 py-2 sm:py-3 text-sm ml-3 sm:ml-6 text-white font-bold leading-tight">DONATE</NavLink>
                                </div>
                            </div>
                        </div>
                        <div class="px-6 pb-2 mx-auto items-center">
                            <div class="w-full overflow-y-hidden px-4">
                                <div className="text-center pt-12">
                                    <svg class="arrow animate-bounce mx-auto text-sm ml-3 sm:ml-6" width="70" height="55" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
                                        <path d="M0,0 l35,50 l35,-50" fill="none" stroke="black" stroke-linecap="round" stroke-width="5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
