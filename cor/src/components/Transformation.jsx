import React from 'react'
import "./css/Transformation.css"
import { NavLink } from "react-router-dom"
import Fade from 'react-reveal/Fade';

export default function Transformation() {
    return (
        <main>
            <section>
                <div>
                    <div className="backgroundP flex flex-col items-center pt-6 sm:pt-12">
                        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                            <h1 className="titleFont text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold leading-tight">Stories of Transformation</h1>
                        </div>
                        <div>
                            <h3 class="textFont px-4 md:px-8 container sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center font-bold leading-tight">At City of Refuge, we know that transformation only takes place in the context of hard work and loving relationships. Please take a moment and meet some of our heroes that have decided to impact their own lives and the lives around them by entering our campus.</h3>
                        </div>
                        <div class="grid md:grid-cols-3 gap-2">
                            <Fade big>
                                <div>
                                    <div className="py-6 pl-12">
                                        <iframe width="350" height="350" src="https://vimeo.com/454154925" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <div class="px-6 mx-auto items-center pt-8 pb-6">
                                            <div class="w-full overflow-y-hidden px-4">
                                                <div className="text-center py-6">
                                                    <NavLink
                                                    to="/techgrad" 
                                                    class="buttons px-3 sm:px-6 py-2 sm:py-3 text-xs ml-3 sm:ml-6 text-white">MEET OUR TECH GRADUATES</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-6">
                                        <iframe width="350" height="350" src="https://vimeo.com/454154925" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <div class="px-6 mx-auto items-center pt-8 pb-6">
                                            <div class="w-full overflow-y-hidden px-4">
                                                <div className="text-center py-6">
                                                    <NavLink
                                                    to="/matt-tiffany" 
                                                    class="buttons px-3 sm:px-6 py-2 sm:py-3 text-xs ml-3 sm:ml-6 text-white">MEET MATT & TIFFANY</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="py-6 pr-12">
                                        <iframe width="350" height="350" src="https://vimeo.com/454154925" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <div class="px-6 mx-auto items-center pt-8 pb-6">
                                            <div class="w-full overflow-y-hidden px-4">
                                                <div className="text-center py-6">
                                                    <NavLink
                                                    to="/meet-kisha" 
                                                    class="buttons px-3 sm:px-6 py-2 sm:py-3 text-xs ml-3 sm:ml-6 text-white">MEET KISHA</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </main>      
    )
}
