import Link from "next/link"

const cards: React.ReactNode[] = [
    {url: "/images/gn_card.jpg", alt: "Grands Netoyages", anchor: "gn"},
    {url: "/images/office_card.jpg", alt: "Nettoyage Bureau", anchor: "office"},
    {url: "/images/industry_card.jpg", alt: "Nettoyage D'industries", anchor: "industry"},
    {url: "/images/sinister_card.jpg", alt: "Nettoyage Après Sinistres", anchor: "sinister"}
].map((element, id) => {
    return <li className=" snap-center pt-2" key={element.anchor+String(id)}>
        <Link className=" relative focus:bottom-2 hover:bottom-2" href={`/expertise#${element.anchor}`}>
            <img className=" min-w-36" src={element.url} alt={element.alt} />
        </Link>
    </li>
})

export default function ServicesSection({}) {

    return <section className=" flex justify-center relative before:absolute mx-10 before:-inset-10 before:dot-background before:-z-10">
        <div className=" w-[80%] flex flex-col gap-6">
            <h2 className=" pb-6 text-center text-2xl text-foreground-2 font-semibold" >Nos <span className="z-10 w-fit relative before:block before:absolute before:inset-0 before:top-[40%] before:-translate-x-1.5 before:translate-y-0.5 before:rounded-md before:-z-10 before:bg-background-2" >services</span></h2>
            <ul className=" grid grid-flow-col gap-6 overflow-x-auto pb-4 snap-x">
                {cards}
            </ul>
            <span>et <Link className=" text-primary underline" href="/quote">bien plus encore...</Link></span>
        </div>
    </section>
}