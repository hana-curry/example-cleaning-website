export interface NavigationLinkProps {
    path: string,
    title: string
}

export default function NavigationLink({path, title}: NavigationLinkProps) {
    return <li key={`${path}-${title}`}>
            <a
                className={
                    "text-foreground pt-6 pb-12 block "
                    + "before:hidden before:h-px before:w-0 before:bg-foreground before:translate-y-7 before:duration-300 "
                    + "sm:py-4 sm:px-6 sm:before:block hover:before:w-full "
                }
                href={path}
            >
                {title}
            </a>
    </li>
}