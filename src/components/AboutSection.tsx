function AboutSection() {
    return (
        <div className="bg-[url('/src/assets/grades-656593_1920.webp') a] bg-black bg-blend-overlay bg-cover bg-center w-full flex h-dvh flex-col justify-center p-8 pl-0">
                <h3 className="pl-8 text-xs px-2 text-left text-custom-red font-default font-bold" >Sobre nosotros</h3>
                <h2 className=" bg-white/95 text-black font-default font-bold text-xl text-center mb-5 rounded-r-lg p-2 pl-8">¿Qué es <span className="font-logo text-black"> la cocina</span> ?</h2>
                <p className="pl-8 text-white text-lg font-default font-bold italic text-center mb-5">Un espacio donde la música, la danza, el teatro y las charlas con grandes artistas se unen para que vivas el arte desde adentro.</p>
                <img src="/src/assets/guitar-5187376_1280.webp" alt="" className="relative rounded-r-2xl saturate-0 mb-5"/>
                <h2 className="pl-8 text-white font-default font-bold text-3xl text-center mb-5">¿Quienes somos?</h2>
                <p className="pl-8 text-white text-lg font-default font-bold italic text-center mb-5">Un espacio donde la música, la danza, el teatro y las charlas con grandes artistas se unen para que vivas el arte desde adentro.</p>
        </div>
    )
}

export default AboutSection;