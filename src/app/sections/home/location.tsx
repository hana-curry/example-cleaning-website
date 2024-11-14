import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/app/components/map'), {
    ssr: false,
  })

const infos = [
    {img: "/images/pin.svg", alt: "Punaise de carte", text: "Adresse du siege social"},
    {img: "/images/phone.svg", alt: "Téléphone", text: "(+32) 000 00 00 00"},
    {img: "/images/mail.svg", alt: "Email", text: "nom.prénom@colle.dev"},
    {img: "/images/tva.svg", alt: "Un cercle avec un 'i' à l'intérieur", text: "TVA 0000.000.000"}
].map((element, id) => {
    return <li className=" flex gap-3" key={element.text+String(id)}>
        <img className="w-4" src={element.img} alt={element.alt} />
        <span>{element.text}</span>
    </li>
})

export default function LocationSection({}) {
    return <section className=" pt-24 w-full flex justify-center pb-24">
        <div className=" w-[80%] flex flex-col gap-6">
            <h2 className="font-bold text-primary text-2xl">Ou nous trouver?</h2>
            <div className=" flex flex-col md:grid md:grid-flow-col gap-8">
                <div className=" md:col-span-3" >
                    <Map className="w-full h-56" />
                </div>
                <div className=" flex flex-col gap-4">
                    <h3 className=" text-xl">Informations</h3>
                    <ul className=" flex flex-col gap-2.5">
                        {infos}
                    </ul>
                </div>
            </div>
        </div>
    </section>
}