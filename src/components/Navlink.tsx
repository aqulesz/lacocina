type NavLinkProps = {
    url : string;
    text? : string;
}

function NavLink({ url, children } : NavLinkProps & { children: React.ReactNode }) {
    return <a href={url} className="text-white font-default font-bold text-sm hover:text-red-600 md:text-sm lg:text-sm">{children}</a>
}

export default NavLink;