type NavLinkProps = {
    url : string;
    text? : string;
}

function NavLink({ url, children } : NavLinkProps & { children: React.ReactNode }) {
    return <a href={url} className="text-white font-default font-bold text-sm md:text-xs hover:text-red-600 lg:text-sm">{children}</a>
}

export default NavLink;