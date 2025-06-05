function PrincipalHero() {
    return (
        <div id="home" className="bg-[url('/src/assets/concert-7424190_1920.webp')] w-full h-svh flex justify-center items-center bg-cover bg-center">
            < div className="absolute inset-0 bg-black opacity-25" ></div>
            <div className="z-1 flex flex-col gap-7 w-xs h-1/3 p-3 sm:w-2/3 lg:w-4/5 lg:justify-between lg:items-center xl:w-4/6">
                <h2 className="text-5xl font-hero font-bold tracking-tight text-white sm:text-7xl md:text-7xl lg:text-8xl text-center lg:mb-5">
                    <span className="text-custom-red block" >Saca el artista</span> que hay en vos
                </h2>
                <p className="text-white font-default font-normal text-center text-sm md:text-lg" >Todo en un espacio donde la pasión por el arte se respira.</p>
                <h1 className="font-hero text-gray-300 text-center text-xs md:text-xl">Academia de Música en Córdoba Capital</h1>
            </div>
        </div>
    )
}

export default PrincipalHero;