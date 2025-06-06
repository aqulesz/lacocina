import CardClase from "./CardClase";
import Guitarimg from "../assets/clases/people-2570616_1280.webp";
import PianoImg from "../assets/clases/martin-hexeberg-jp0VExvkRzY-unsplash.webp"
import Cantoimg from "../assets/clases/elizeu-dias-aZ3qiq1eTRk-unsplash.webp"
import Violinimg from "../assets/clases/caglar-oskay-1e7IF27F_kU-unsplash.webp"
import Drumsimg from "../assets/clases/aliane-schwartzhaupt-QdmUva6qBTk-unsplash.webp"
import Folcloreimg from "../assets/clases/2019-una-fo-raices-nortenas-1.webp"
import Bajoimg from "../assets/clases/krisztian-reischl-5OlBfj3Qgak-unsplash.webp"
import HSimg from "../assets/clases/home-hero-sonar.B3AsyLtN.webp"

function ClasesSection() {
    return (
        <section id="clases" className="bg-black bg-blend-overlay bg-cover bg-center w-full flex flex-col items-center justify-center p-8  pl-0 pt-0 sm:p-8 sm:pl-0 sm:pt-0 md:p-0 md:pr-8 md:pb-10">
                <h2 className="text-3xl text-left self-start text-custom-red font-hero pt-2 mb-5 sm:text-4xl md:col-start-1 md:col-end-3 lg:text-5xl lg:mb-10" >NUESTRAS CLASES</h2>
                <section className="pl-8 flex flex-col gap-5 sm:grid sm:grid-cols-2 md:grid-cols-3 md:items-stretch lg:grid-cols-4">
                    <CardClase title="Teclado y Piano" src={PianoImg} text="Para principiantes, trabajamos técnica, lectura musical y fundamentos clave. Para niveles avanzados, exploramos la improvisación y un repertorio personalizado. Desarrollá tu oído musical con un enfoque dinámico, práctico y adaptado a vos." />
                    <CardClase title="Guitarra Criolla y Acústica" src={Guitarimg} text="Aprendé técnicas, acordes, rasguidos y distintos estilos para expresarte con tu instrumento. Ideal para todas las edades, esta clase te invita a acompañarte y cantar tus canciones favoritas desde el primer día." />
                    <CardClase title="Canto" src={Cantoimg} text="Descubrí tu voz con ejercicios de respiración, técnica vocal y trabajo sobre repertorio y estilos. Clases para todas las edades, pensadas para que cantes con confianza y disfrutes cada nota." />
                    <CardClase title="Violín" src={Violinimg} text="Aprendé técnica y explorá distintos estilos en un espacio pensado para todas las edades. Clases para nivel principiante e intermedio, con un enfoque claro, musical y progresivo." />
                    <CardClase title="Batería" src={Drumsimg} text="Dominá la técnica, los ritmos y los estilos que dan vida a la música. Además, accedé a charlas exclusivas con bateristas reconocidos. Una experiencia completa para sentir el pulso desde adentro." />
                    <CardClase title="Folclore" src={Folcloreimg} text="Viví nuestras raíces a través de danzas tradicionales, con cursos teóricos y prácticos. Explorá la danza estilizada con proyección escénica y preparación para presentaciones. Cultura, técnica y pasión en cada clase." />
                    <CardClase title="Bajo" src={Bajoimg} text="Sentí el groove desde la base: técnica, estilos, slap, tapping y más. Clases para todas las edades, pensadas para que te conectes con el ritmo y explores tu sonido." />
                    <CardClase title=" Grabación Digital en Home Studio" src={HSimg} text="Aprendé a producir desde tu casa con Cakewalk, instrumentos virtuales, automatización y técnicas de mezcla. Ideal para quienes quieren dar sus primeros pasos en la producción musical con herramientas profesionales." />
                </section>
        </section>
    )
}

export default ClasesSection;