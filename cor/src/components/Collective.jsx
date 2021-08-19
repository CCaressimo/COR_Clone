import React from 'react'
import { Link } from 'react-scroll'
import "./css/Hero.css"

export default function Collective() {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <main>
            <section>
                <div>
                    <div class="bg-gray-700 flex flex-col items-center py-12 sm:py-24">
                        <div class="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">2020 Collective Impact </h1>
                        </div>
                        <div>
                            <h3 class="px-12 md:px-36 pb-6 container sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center text-white font-bold leading-tight">“If you want to go fast, go alone. If you want to go far, go together.”</h3>
                        </div>
                            <div class="grid md:grid-cols-3 gap-4 px-36 orangeText">
                                <div>
                                    <div className="p-6 pb-12 md:pb-24">
                                        <h1 className="container text-center leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-4">0</h1>
                                        <h3 className="container text-center sm:text-md md:text-lg lg:text-xl xl:text-2xl leading-tight">JOBS PLACED</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-6">
                                        <h1 className="container text-center leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-4">0</h1>
                                        <h3 className="container text-center sm:text-md md:text-lg lg:text-xl xl:text-2xl leading-tight">PEOPLE HOUSED</h3>
                                    </div>
                                </div>
                                <div >
                                    <div className="p-6">
                                        <h1 className="container text-center leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-4">0</h1>
                                        <h3 className="container text-center sm:text-md md:text-lg lg:text-xl xl:text-2xl leading-tight">MEALS SERVED</h3>
                                    </div>
                                </div>
                            </div>                        
                        <div className="pb-8">
                            <button onClick={refreshPage}>
                                <h3 class="px-2 md:px-4 pb-1 container sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center buttons2 leading-tight">click here to refresh numbers</h3>
                            </button>
                        </div>
                        <div class="px-6 mx-auto items-center">
                            <div class="w-full overflow-y-hidden px-4">
                                <div className="text-center py-6">
                                    <a href="https://give.cityofrefugeatl.org/give/270004/#!/donation/checkout" 
                                    target="_blank" 
                                    class="buttons px-3 sm:px-6 py-2 sm:py-3 text-sm ml-3 sm:ml-6 text-white font-bold leading-tight">DONATE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
