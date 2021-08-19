import React from 'react'
import { NavLink } from "react-router-dom"

export default function FreeResouce() {
    return (
        <main>
            <section className="I-Impact" id="Impact">
                <div>
                    <div class="backgroundP flex flex-col py-8 sm:py-16">
                        <div class="px-12 md:px-24">
                            <h1 class="sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-left titleFont font-bold leading-tight">A Free Resource For You</h1>
                            <div className="container text-left md:pr-96">
                                <h1 class="pt-12 text-lg text-left textFont leading-tight">In Atlanta’s Westside, in zip code 30314, decades of neglect and disinvestment have gradually taken their toll on this once-proud neighborhood. Here, one finds the state’s highest incidences of poverty, incarceration rates, and teen pregnancies. Here, crime is rampant, and prostitution and drug deals occur in an open- air market. Here, the majority of housing stock is abandoned or derelict, with boarded-up and burnt-out shells lining the streets. In 30314, the problems are pervasive, and the needs are enormous.</h1>
                                <h1 class="pt-6 pb-12 text-lg text-left textFont leading-tight">In this Ebook, you will find practical ways to get involved and bring about lasting change.<span className="highlightedFont"> Click the button below and enter your email address to receive instant access.</span></h1>
                            </div>
                            <div class="w-full overflow-y-hidden">
                                <div className="py-6">
                                    <NavLink
                                    to="*" 
                                    class="buttons px-3 sm:px-6 py-2 sm:py-3 text-sm text-white font-bold leading-tight">DOWNLOAD EBOOK</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
