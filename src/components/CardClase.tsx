type CardClaseProps = {
    title : string;
    img : string;
    text : string;
}

function CardClase({ title, img, text } : CardClaseProps ) {
    return (
        <div className="bg-custom-red flex flex-col shrink-0" >
            <h4 className="font-hero text-2xl mb-1 md:basis-18 flex-none" >{title}</h4>
            <img src={img} alt={title} className="px-1"/>
            <p className="font-default font-medium p-2 h-5/10" >{text}</p>
            <a href="https://api.whatsapp.com/send/?phone=543512457260&text&type=phone_number&app_absent=0" className="text-gray-300 underline font-default font-medium block p-2 place-self-end self-end">Inscribite ahora</a>
        </div>
    )
}

export default CardClase;