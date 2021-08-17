import React from 'react'
import { NavLink } from "react-router-dom"
import "./css/Impact.css"

export default function Impact() {
    return (
        <main>
            <section>
                <div>
                    <div class="background flex flex-col items-center pt-6 sm:pt-12">
                        <div class="w-11/12 sm:w-2/3">
                            <h1 class="container sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center text-white font-bold leading-tight">OVER 20 YEARS OF IMPACT IN THE WESTSIDE OF ATLANTA</h1>
                        </div>
                        <div class="px-6 mx-auto items-center pt-6 pb-12">
                            <div class="w-full overflow-y-hidden px-4">
                                <div className="text-center py-6">
                                    <NavLink
                                    to="/our-history" 
                                    class="buttons px-3 sm:px-6 py-2 sm:py-3 text-sm ml-3 sm:ml-6 text-white font-bold leading-tight">LEARN ABOUT OUR HISTORY</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
