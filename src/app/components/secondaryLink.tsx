import Link from "next/link"

export default function SecondaryLink({children, href}: {
    children: React.ReactNode, 
    href: string
}) {
    return <Link className=" nav_a px-6 py-2 text-foreground border-[1.5px] border-foreground rounded-full w-fit" href={href}>
        <span className=" nav_a_span sm:relative sm:before:w-0 sm:before:h-[1.5px] sm:before:bg-foreground sm:before:block sm:before:absolute sm:before:translate-y-6">{children}</span>
    </Link>
}