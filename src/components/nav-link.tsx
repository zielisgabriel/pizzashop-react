import { LinkProps, NavLink, useLocation } from "react-router";

type NavigationLinkProps = LinkProps

export function NavigationLink(props: NavigationLinkProps) {
    const { pathname } = useLocation()

    return <NavLink data-current={pathname === props.to} className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground" {...props} />
}