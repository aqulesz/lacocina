import Guitarimg from "../assets/guitar-5187376_1280.webp";
import Drumimg from "../assets/drum-set-4865818_1280.webp";
import Pianoimg from "../assets/piano-3703616_1280.webp";
import Violinimg from "../assets/clarissa-watson-kG-UNTwqyso-unsplash.webp";

function AboutSection() {
    return (
        <div className="bg-black bg-blend-overlay bg-cover bg-center w-full flex flex-col justify-center p-8  pl-0 pt-0 sm:p-20 sm:pl-0 sm:pt-0 md:p-0 md:pb-10 md:grid md:grid-cols-4 md:gap-4 lg:gap-5 lg:h-svh ">
                <h2 className="text-2xl text-left text-custom-red font-hero p-2 mb-5 sm:text-4xl md:col-start-1 md:col-end-3 lg:text-5xl lg:mb-0" >SOBRE NOSOTROS</h2>
                <div className="md:row-start-2 md:col-start-3 md:col-end-5 md:place-self-center lg:px-10 ">
                    <h3 className=" bg-white text-black font-hero font-bold text-2xl text-center mb-5 rounded-r-lg pl-8 sm:text-4xl sm:pl-20 md:pl-0 md:text-white md:bg-transparent">¿Qué es <span className="font-logo text-black md:text-white"> la cocina</span> ?</h3>
                    <p className="pl-8 text-gray-300 text-lg font-default font-light text-center mb-5 sm:pl-20 md:col-start-2 md:pl-0">Un espacio donde la música, la danza, el teatro y las charlas con grandes artistas se unen para que vivas el arte desde adentro .</p>
                </div>
                    <img src={Guitarimg} alt="" className="mb-5 rounded-r-2xl saturate-0 hover:saturate-100 hover:transition-all md:h-48 md:w-96 md:object-cover md:col-start-1 md:row-start-2 md:my-0 md:row-end-3 md:self-center"/>
                    <img src={Drumimg} alt="" className="hidden h-48 w-96 object-cover  md:block rounded-r-2xl saturate-0 hover:saturate-100 hover:transition-all md:col-start-1 md:row-start-3 md:row-end-4 md:self-center"/>
                    <img src={Pianoimg} alt="" className="hidden h-48 w-96 object-cover  md:block rounded-2xl saturate-0 hover:saturate-100 hover:transition-all md:col-start-2 md:row-start-3 md:row-end-4 md:self-center"/>
                    <img src={Violinimg} alt="" className="hidden h-48 w-96 object-cover md:block rounded-2xl saturate-0 hover:saturate-100 hover:transition-all md:col-start-2 md:row-start-2 md:row-end-3 md:self-center"/>  
                <div className="md:row-start-3 md:col-start-3 md:place-self-center md:col-end-5 lg:px-10">
                    <h3 className="pl-8 text-white font-hero font-bold text-2xl text-center mb-5 sm:text-4xl sm:pl-20 md:col-start-2 md:pl-0">¿Quienes somos?</h3>
                    <p className="pl-8 text-gray-300 text-lg font-default font-light text-center mb-5 sm:pl-20 md:col-start-2 md:pl-0">Un espacio donde la música, la danza, el teatro y las charlas con grandes artistas se unen para que vivas el arte desde adentro.</p>
                </div>
        </div>
    )
}

export default AboutSection;