import { useEffect,useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import NavLink from "./Navlink";

function Header() {
    const [toggle, setToggle] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);


    function handleToggle() {
        setToggle(!toggle);
    }

    const isDesktop = useMediaQuery({ query: '(min-width: 800px)' });

    const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

    useEffect(() => {
        if (isDesktop) {
            setToggle(true);
        } else if (isMobile) {
            setToggle(false);
        }
    }, [isDesktop, isMobile]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollState = window.scrollY;

            if (currentScrollState > scrollPosition && currentScrollState > 50) {
            setIsVisible(false);
            } else {
            setIsVisible(true);
            }

            setScrollPosition(currentScrollState);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[scrollPosition])

    return (
             <nav className={`w-full py-2 z-2 transition-transform duration-300 transform-gpu ${isMobile ? `backdrop-blur-lg bg-neutral-700/10 fixed top-0 left-0 ${isVisible ? "translate-y-0" : "-translate-y-full" }` : "absolute"} md:py-4`}>
                <div className={`flex flex-col justify-between transition-transform duration-300 ${toggle && "gap-5"} sm:flex-row md:justify-start md:gap-15 lg:justify-between lg:items-center`}>
                    <div className="flex justify-between">
                        <div className="logo p-1 pr-3 bg-white rounded-r-lg flex flex-col">
                            <span className="font-logo tracking-tight text-3xl lg:text-4xl" >La cocina</span>
                            <span className="font-default text-[10px] font-bold tracking-tighter lg:text-[12px]" >Formación y Producción Artística.</span>
                        </div>
                        <button className="text-custom-red sm:hidden" onClick={handleToggle}>
                            <svg className="w-6 h-6 fill-current mr-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                            </svg>
                        </button>        
                    </div>
                    <div className={`${toggle ? "max-h-40 mt-5" : "max-h-0 invisible"} flex flex-col pl-4 gap-5 sm:gap-8 sm:flex-row sm:justify-between sm:mt-0 sm:items-center sm:pr-30 lg:gap-15 lg:p-0 text-sm sm:hidden overflow-hidden transition-all ease-in-out`}>
                                <NavLink url="#">Inicio</NavLink>
                                <NavLink url="#">Nosotros</NavLink>
                                <NavLink url="#">Nuestras clases</NavLink>
                                <NavLink url="#">Contactanos</NavLink>
                    </div>                      
                    <button className={`${toggle ? "max-h-40 text-white font-default font-normal bg-custom-red py-2 px-9 rounded-lg lg:text-sm lg:mr-4" : "max-h-0 invisible"}`}>Inscribite ya</button>                 
                </div>
            </nav>
    )
}

export default Header;