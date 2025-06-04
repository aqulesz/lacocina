import Guitarimg from "../assets/guitar-5187376_1280.webp";
import Drumimg from "../assets/drum-set-4865818_1280.webp";
import Pianoimg from "../assets/piano-3703616_1280.webp";
import Violinimg from "../assets/clarissa-watson-kG-UNTwqyso-unsplash.webp";

function AboutSection() {
    return (
        <div id="about" className="bg-black bg-blend-overlay bg-cover bg-center w-full flex flex-col justify-center p-8  pl-0 pt-0 sm:p-20 sm:pl-0 sm:pt-0 md:p-0 md:mb-20 md:grid md:grid-cols-4 md:gap-2">
                <h2 className="text-3xl text-left text-custom-red font-hero pt-2 mb-5 sm:text-4xl md:col-start-1 md:col-end-3 lg:text-5xl lg:mb-15" >SOBRE NOSOTROS</h2>
                <div className="md:row-start-2 md:col-start-3 md:col-end-5 md:place-self-center lg:px-10 ">
                    <h3 className=" text-white font-hero font-bold text-3xl text-center mb-5 rounded-r-lg pl-8 sm:text-4xl sm:pl-20 md:pl-0">¿Qué es <span className="font-logo block sm:inline text-white"> la cocina ?</span> </h3>
                    <p className="pl-8 text-gray-300 text-lg font-default font-light text-center mb-5 sm:pl-20 md:col-start-2 md:pl-0">En La Cocina, creemos que el arte se vive desde adentro.
                    Somos un espacio de encuentro donde la música, el teatro, la danza y la palabra se mezclan como ingredientes en una cocina creativa.
                    Aquí, el aprendizaje y la creación se dan la mano, guiados por artistas y docentes con trayectoria y pasión.</p>
                </div>
                <div className="pl-8 col-start-1 col-end-3 row-start-2 row-end-4 grid grid-cols-1 md:grid-cols-2 gap-0">
                    <img src={Guitarimg} alt="" className="mb-5 md:h-full col-start-1 row-start-1 md:object-cover md:col-start-1 md:row-start-2 md:my-0 md:row-end-3"/>
                    <img src={Drumimg} alt="" className="hidden md:h-full md:block md:col-start-1 md:row-start-3 md:row-end-4"/>
                    <img src={Pianoimg} alt="" className="hidden md:h-full object-cover  md:block  md:col-start-2 md:row-start-3 md:row-end-4"/>
                    <img src={Violinimg} alt="" className="hidden md:h-full object-cover md:block  md:col-start-2 md:row-start-2 md:row-end-3"/> 
                </div>                     
                <div className="md:row-start-3 md:col-start-3 md:place-self-center md:col-end-5 lg:px-10">
                    <h3 className="pl-8 text-white font-hero font-bold text-2xl text-center mb-5 sm:text-4xl sm:pl-20 md:col-start-2 md:pl-0">¿Quienes somos?</h3>
                    <p className="pl-8 text-gray-300 text-lg font-default font-light text-center mb-5 sm:pl-20 md:col-start-2 md:pl-0"><span className="text-bold">Somos músicos. </span> 
                    Vivimos, enseñamos y compartimos la música desde la experiencia y la pasión.
                    Además de músicos, somos docentes y creadores comprometidos con la formación artística.
                    En La Cocina, acompañamos tu camino con un enfoque humano, creativo y profesional.
                    </p>
                </div>
        </div>
    )
}

export default AboutSection;