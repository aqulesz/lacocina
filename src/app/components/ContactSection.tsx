function ContactSection() {
    return (
        <div id="contact" className="bg-black w-full flex flex-col p-8 pl-0 pt-0 mb-10 sm:p-20 sm:pl-0 sm:pt-0 md:p-0 md:grid md:grid-cols-3">
                <h2 className="text-3xl text-left text-custom-red font-hero pt-2 mb-5 sm:text-4xl md:col-span-3 lg:text-5xl lg:mb-15" >CONTACTANOS</h2>
                <div className="pl-8 mb-10 self-center md:p-8 md:pr-0  md:self-start ">
                    <h3 className=" text-white font-hero font-bold text-2xl mb-5 md:text-4xl">Aprende ya!</h3>
                    <p className="text-white font-default font-normal py-2"><span className="text-custom-red">Número de teléfono (<a className="underline" href="https://api.whatsapp.com/send/?phone=543512457260&text&type=phone_number&app_absent=0" >WhatsApp</a>): </span><span className="inline-block"> +54 9 351 2457260</span></p>
                    <p className="text-white font-default font-normal py-2"><span className="text-custom-red">Correo electrónico: </span>vinales1975@gmail.com</p>
                    <p className="text-white font-default font-normal py-2"><span className="text-custom-red">Direcciónes: </span>Luis de Azpeitia 1515, Córdoba</p>
                </div>
                <div className="pl-8 sm:w-2/2 md:p-8 md:col-span-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.993444365367!2d-64.2053105!3d-31.414306699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329882e1d4bd8b%3A0x555ea696d5b6dd9!2sLuis%20de%20Azpeit%C3%ADa%201515%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1749004890116!5m2!1ses!2sar"
                    className="w-full h-60 md:h-96" 
                     style={{ border: 0 }} 
                     allowFullScreen loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade">
                     </iframe>
                </div>
        </div>
    )
}

export default ContactSection;