function PrincipalHero() {
    return (
        <div className="bg-[url('/src/assets/concert-7424190_1920.webp')] w-full h-dvh flex justify-center items-center bg-cover bg-center">
            < div className="absolute inset-0 bg-black opacity-25" ></div>
            <div className="z-1 flex flex-col gap-7 w-xs h-1/3 p-3 sm:w-2/3 lg:w-4/5 lg:justify-between lg:items-center xl:w-4/6">
                <h1 className="text-5xl font-hero font-bold tracking-tight text-white sm:text-7xl md:text-7xl lg:text-8xl text-center lg:mb-5">
                    <span className="text-custom-red block" >Saca el artista</span> que hay en vos
                </h1>   
                <p className="text-white font-default font-normal text-center lg:text-lg" >Todo en un espacio donde la pasión por el arte se respira.</p>
            </div>
        </div>
    )
}

export default PrincipalHero;