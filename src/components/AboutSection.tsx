function AboutSection() {
    return (
        <div className="bg-[url('/src/assets/grades-656593_1920.webp')] bg-black/80 bg-blend-overlay bg-cover bg-center w-full flex flex-col p-6">
                <h3 className="text-xs px-2 text-left text-custom-red font-default font-bold" >Sobre nosotros</h3>
                <h2 className="text-white font-default font-bold text-3xl text-center mb-5">¿Qué es <span className="font-logo text-gray-300"> la cocina</span> ?</h2>
                <p className="text-white text-lg font-default font-bold italic text-center mb-5">Un espacio donde la música, la danza, el teatro y las charlas con grandes artistas se unen para que vivas el arte desde adentro.</p>
                <img src="/src/assets/guitar-5187376_1280.webp" alt="" className="rounded-2xl saturate-0 mb-5"/>
                <h2 className="text-white font-default font-bold text-3xl text-center mb-5">¿Quienes somos?</h2>
                <p className="text-white text-lg font-default font-bold italic text-center mb-5">Un espacio donde la música, la danza, el teatro y las charlas con grandes artistas se unen para que vivas el arte desde adentro.</p>
        </div>
    )
}

export default AboutSection;