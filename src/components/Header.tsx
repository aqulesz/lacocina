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
             <nav className={`fixed top-0 left-0 w-full py-4 backdrop-blur-lg z-2 ${isVisible ? "translate-y-0" : "translate-y-200" } ${scrollPosition > 50 ? "bg-neutral-700/10" : "bg-neutral-700/10"} `}>
                <div className="flex flex-col justify-between gap-5 transition-transform duration-300 sm:flex-row md:justify-start md:gap-15 lg:justify-between lg:items-center">
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
                    {toggle && (
                            <div className="flex flex-col mt-5 pl-4 gap-5 sm:gap-8 sm:flex-row sm:justify-between sm:mt-0 sm:items-center sm:pr-30 lg:gap-15 lg:p-0">
                                <NavLink url="#">Inicio</NavLink>
                                <NavLink url="#">Nosotros</NavLink>
                                <NavLink url="#">Nuestras clases</NavLink>
                                <NavLink url="#">Contactanos</NavLink>
                            </div>                      
                        )}
                    {toggle && (
                        <button className="text-white font-default font-normal bg-custom-red py-2 px-9 rounded-lg lg:text-sm lg:mr-4 ">Inscribite ya</button>                          
                        )}
                    
                </div>
            </nav>
    )
}

export default Header;