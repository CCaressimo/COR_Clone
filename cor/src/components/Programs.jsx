import React from 'react'
import { NavLink } from "react-router-dom"

export default function Programs() {
    return (
        <main>
            <section className="I-Impact" id="Impact">
                <div>
                    <div class="backgroundP flex flex-col py-8 sm:py-16">
                        <div class="px-12 md:px-24">
                            <h1 class="sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-left titleFont font-bold leading-tight">Our Programs</h1>
                            <h1 class="py-12 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-left textFont leading-tight">Our campus programs are a result of over two decades of experience in community development. Our programs are holistic and based on four key impact areas:<span className="highlightedFont"> Health & Wellness, Housing, Vocational Training, and Youth Development.</span></h1>

                            <div class="w-full overflow-y-hidden">
                                <div className="py-6">
                                    <NavLink
                                    to="/programs" 
                                    class="buttons px-3 sm:px-6 py-2 sm:py-3 text-sm text-white font-bold leading-tight">VIEW PROGRAMS AND ON-SITE PARTNERS</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>   
    )
}
