import link from "@/app/types/link"

export default function Header({}) {

    const links: link[] = [
        {url: "/", title: "Accueil"},
        {url: "/quote", title: "Devis"},
        {url: "/expertise", title: "Savoir-faire"},
        {url: "/contact", title: "Contact"}
    ]

    const linksComponents: JSX.Element[] = links.map((link, id) => {
        return <li className=" block" key={link.url + link.title + String(id)}>
            <a className=" nav_a block py-2 sm:relative sm:px-5" href={link.url}>
                <span className=" nav_a_span sm:relative sm:before:w-0 sm:before:h-[1px] sm:before:bg-foreground sm:before:block sm:before:absolute sm:before:translate-y-6">{link.title}</span>
            </a>
        </li>
    })


    return <header className=" w-full flex justify-center fixed z-30 top-0">
        <div className=" max-w-[1080px] h-fit bg-background w-full flex flex-row justify-between items-center px-8 py-2">
            <h1><a href="/">
            <img className=" w-20" src="/images/logo.svg" alt="Colle's cleaning" />
            </a></h1>
            <input className=" hidden" type="checkbox" id="toggle-nav" aria-label="toggle navigation" aria-controls="toggle-nav" />
            <label className=" sm:hidden z-50 block h-8" id="hamburger-label" aria-hidden="true" htmlFor="toggle-nav">
                <div id="hamburger-line-1" className=" relative w-8 h-1 bg-current"></div>
                <div id="hamburger-line-2" className=" relative translate-y-2 w-8 h-1 bg-current"></div>
                <div id="hamburger-line-3" className=" relative translate-y-4 w-8 h-1 bg-current"></div>
            </label>
            <nav className=" z-40 sm:h-fit sm:relative sm:translate-x-0 sm:bg-transparent sm:inset-0 sm:text-foreground sm:p-0 translate-x-[100%] duration-200 absolute h-[100vh] top-0 bottom-0 right-0 left-[20%] bg-foreground text-background pt-12 pl-12">
                <ol className=" sm:flex-row flex flex-col gap-1" >
                    {linksComponents}
                </ol>
            </nav>
        </div>
  </header>
}