import { Metadata } from "next"

export const metadata: Metadata = {
    description: "Chez Colle's Cleaning Services, nous réalisons des grand nettoyages, l'entretien de bureaux, le nettoyage d'entreprise, les interventions après sinistre et bien d'autres. Faites confiance à notre expertise pour un environnement impeccable."
}

type service = {
    name: string,
    description: string,
    id: string
}

const services: service[] = [
    {name: "Grands nettoyages", id: "gn", description: "Avec notre expertise et nos techniques professionnelles, nous assurons un Grand Nettoyage rapide et efficace, pour des résultats impeccables."},
    {name: "Nettoyage de bureau", id: "office", description: "Nous proposons des services de nettoyage de bureaux personnalisés, alliant professionnalisme, discrétion et efficacité pour un espace de travail impeccable."},  
    {name: "Nettoyage d’industrie", id: "industry", description: "Nous offrons des services de nettoyage pour les lieux industriels, garantissant propreté et sécurité grâce à notre expertise et à des méthodes adaptées."},
    {name: "Nettoyage apres sinistres", id: "sinister", description: "Nous réalisons des nettoyages après sinistres avec rapidité et expertise, pour restaurer la propreté des lieux affectés."}

]

const right_li_class = " sm:text-right sm:self-end"
const right_li_h3_class = " sm:after:ml-4 sm:after:inline-block sm:after:w-3 sm:after:h-3 sm:after:text-foreground-2 sm:after:rounded-full sm:after:border-[2.5px] sm:after:border-foreground-2"
const left_li_class = " sm:text-left"
const left_li_h3_class =  " sm:before:mr-4 sm:before:inline-block sm:before:w-3 sm:before:h-3 sm:before:text-foreground-2 sm:before:rounded-full sm:before:border-[2.5px] sm:before:border-foreground-2"

const services_li = services.map((service: service, key: number) => {
    return <li className={" flex flex-col gap-2 text-center sm:w-[75%] md:w-[60%] " + (key % 2 == 0 ? left_li_class : right_li_class)} key={service.name + String(key)}>
        <h3 id={service.id} className={" text-foreground-2 text-xl font-semibold scroll-mt-20 " + (key % 2 == 0 ? left_li_h3_class : right_li_h3_class)} >{service.name}</h3>
        <p>{service.description}</p>
    </li>
})


const other_services: string[] = [
    "Lavage de vitres",
    "Nettoyage de sols",
    "Handyman",
    "Nettoyage de magasin",
    "Fournitures et consomables",
    "Nettoyage des tapis",
    "Nettoyage de debut chantier",
    "Autres..."
]

let other_services_first_li: React.ReactNode[] = Array(Math.ceil(other_services.length/2))
let other_services_second_li: React.ReactNode[] = Array(Math.floor(other_services.length/2))

other_services.forEach((element: string, key: number) => {
    if (key % 2 == 0) {
        other_services_second_li[key/2] = <li key={element+String(key)}>{element}</li>
    } else {
        other_services_first_li[Math.floor(key)] = <li key={element+String(key)}>{element}</li>
    }
})


export default function Expertise({}) {
    return <div className=" flex flex-col gap-16 py-16 items-center">
        <h2 className=" text-3xl text-center">Notre savoir faire</h2>
        <section className="w-[80%] mb-8">
            <ul className=" flex flex-col gap-12">
                {services_li}
            </ul>
        </section>
        <section className=" flex flex-col-reverse sm:flex-row items-center md:justify-around gap-12 w-[80%]">
            <img className=" w-40" src="/images/services.webp" alt="" />
            <div className="p-6 relative flex flex-col gap-6 w-full max-w-[550px] before:absolute before:rounded-lg before:inset-0 before:bg-foreground before:-z-10 before:opacity-5">
                <h3 className=" text-2xl">Autres services</h3>
                <div className="flex flex-col md:flex-row md:justify-between">
                    <ul className=" flex flex-col gap-2 pl-4 list-disc">{other_services_first_li}</ul>
                    <ul className=" flex flex-col gap-2 pl-4 list-disc pt-2 md:pr-6">{other_services_second_li}</ul>
                </div>
            </div>
        </section>
    </div>
}