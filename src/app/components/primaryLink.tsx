import Link from "next/link"

export default function PrimaryLink({children, href}: {
    children: React.ReactNode, 
    href: string
}) {
    return <Link className=" px-6 py-[10px] overflow-hidden text-background bg-foreground-2 rounded-full w-fit relative before:absolute before:h-[200%] before:w-6 before:bg-background before:top-0 before:-translate-y-[25%] before:rotate-12 before:blur-xl before:left-0 before:-translate-x-20 hover:before:translate-x-20 focus:before:translate-x-20 hover:before:left-[100%] focus:before:left-[100%] hover:before:duration-[600ms] focus:before:duration-[600ms] ease-in" href={href}>
        {children}
    </Link>
}