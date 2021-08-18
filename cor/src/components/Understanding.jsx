import React from 'react'
import "./css/Understanding.css"
import { NavLink } from "react-router-dom"

export default function Understanding() {
    return (
        <main>
            <section className="I-Impact" id="Impact">
                <div>
                    <div class="background flex flex-col py-8 sm:py-16">
                        <div class="px-12 md:px-24">
                            <h1 class="sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-left text-white font-bold leading-tight">Understanding the Need</h1>
                            <h1 class="py-12 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-left text-white leading-tight">City of Refuge is located in the middle of one of Atlanta’s most historic and struggling neighborhoods where nearly 40% of the residents live below the Federal Poverty Level.</h1>

                            <div class="w-full overflow-y-hidden">
                                <div className="py-6">
                                    <NavLink
                                    to="/understanding-the-problem" 
                                    class="buttons px-3 sm:px-6 py-2 sm:py-3 text-sm text-white font-bold leading-tight">VIEW STATISTICS</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>        
    )
}
