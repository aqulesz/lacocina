function AboutSection() {
    return (
        <div className="bg-[url('/src/assets/grades-656593_1920.webp') a] bg-black bg-blend-overlay bg-cover bg-center w-full flex flex-col justify-center p-8  pl-0 pt-0 sm:p-20 sm:pl-0 sm:pt-0 md:p-10 md:pl-0 md:pt-0 md:grid md:grid-cols-2 md:gap-4 lg:gap-11 lg:h-svh">
                <h3 className="text-xl px-2 text-left text-custom-red font-hero p-2 mb-5 sm:text-3xl" >SOBRE NOSOTROS</h3>
                <div className="md:row-start-2 md:col-start-2 lg:px-10">
                    <h2 className=" bg-white text-black font-hero font-bold text-2xl text-center mb-5 rounded-r-lg pl-8 sm:text-4xl sm:pl-20 md:pl-0 md:text-white md:bg-transparent">¿Qué es <span className="font-logo text-black md:text-white"> la cocina</span> ?</h2>
                    <p className="pl-8 text-white text-lg font-default font-light text-center mb-5 sm:pl-20 md:col-start-2 md:pl-0">Un espacio donde la música, la danza, el teatro y las charlas con grandes artistas se unen para que vivas el arte desde adentro .</p>
                </div>
                <img src="/src/assets/guitar-5187376_1280.webp" alt="" className="rounded-r-2xl saturate-0 mb-5 md:col-start-1 md:row-start-2 md:row-end-4 md:self-center"/>
                <div className="md:row-start-3 md:col-start-2 lg:px-10">
                    <h2 className="pl-8 text-white font-hero font-bold text-2xl text-center mb-5 sm:text-4xl sm:pl-20 md:col-start-2 md:pl-0">¿Quienes somos?</h2>
                    <p className="pl-8 text-white text-lg font-default font-light text-center mb-5 sm:pl-20 md:col-start-2 md:pl-0">Un espacio donde la música, la danza, el teatro y las charlas con grandes artistas se unen para que vivas el arte desde adentro.</p>
                </div>
        </div>
    )
}

export default AboutSection;