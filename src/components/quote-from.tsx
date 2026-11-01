"use client"
import { FormEvent, useCallback, useRef, useState } from "react"
import FormButton from "./formButton"
import fieldSetToArray from "../utils/fieldsetToArray"
import { useRouter } from "next/navigation"

const inputStyling = " contact-input bg-[#D4DDDA] text-[#365F54] placeholder-[#839C95] rounded-lg px-3 py-1.5"
const inputDivStyling = " flex flex-col "
const labelStyling = " text-foreground-2 pb-1 "
const h2Styling = " text-foreground-2 text-2xl pb-4j"

type service = {
    title: string,
    icon: string,
    alt: string
}

const services: service[] = [
    {title: "Nettoyage de vitres", icon: "window", alt: "Icône de vitre"},
    {title: "Nettoyage d'industries", icon: "industry", alt: "Icône de vitre"},
    {title: "Handyman", icon: "handyman", alt: "Icône d'un individu de face avec trois engrenages au-dessus de lui."},
    {title: "Nettoy. après sinistres", icon: "sinister", alt: "Icône de brique qui explose"},
    {title: "Nettoyage de bureaux", icon: "desk", alt: "Icône de bureau"},
    {title: "Nettoyage de magasins", icon: "window", alt: "Icône de magasin"},
    {title: "Grands nettoyages", icon: "gn", alt: "Icône d'un balai"},
    {title: "Nettoyage de sols", icon: "floor", alt: "Icône d'un carrelage de sol"},
    {title: "Nettoy. début/fin chantier", icon: "start-end", alt: "Icône d'une lune dans un soleil"},
    {title: "Fournitures / consommables", icon: "consumable", alt: "Icône d'un spray"},
    {title: "Autre...", icon: "", alt: ""},
]

const servicesCheckboxes: React.ReactNode = services.map((service: service, key: number) => {
    return <li key={service.icon+key}>
        <label className=" quote-checkbox-label flex justify-between bg-[#D4DDDA] py-1.5 pl-4 pr-3 rounded-lg text-sm">
            <div className=" flex gap-4 items-center">
                <input value={service.title} type="checkbox" name="services" id={service.icon+"-checkbox"} className="appearance-none w-3 h-3 outline-offset-2 mr-2 bg-[#839C95] outline-[#839C95] outline-2 outline rounded-sm duration-150 checked:bg-primary checked:outline-primary" />
                <span>{service.title}</span>
            </div>
            {service.icon ? <img src={`/images/quote/${service.icon}.svg`} alt={service.alt} /> : ""}
        </label>
    </li>
})

export default function QuoteFrom() {

    const router = useRouter()

    const lastnameRef = useRef<HTMLInputElement | null>(null)
    const firstnameRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const addressRef = useRef<HTMLInputElement | null>(null)
    const phoneRef = useRef<HTMLInputElement | null>(null)
    const servicesRef = useRef<HTMLFieldSetElement | null>(null)
    const societyNameRef = useRef<HTMLInputElement | null>(null)
    const activityRef = useRef<HTMLInputElement | null>(null)
    const commentRef = useRef<HTMLTextAreaElement | null>(null)

    const [current, setCurrent] = useState(1)

    const handleFirstStep = useCallback((event: FormEvent) => {
        event.preventDefault()
            setCurrent(2)
    }, [])

    const handleSecondStep = useCallback((event: FormEvent) => {
        event.preventDefault()
        setCurrent(3)
    }, [])

    const handlePrevious = useCallback(() => {
        if (current >= 2) {
            setCurrent(current-1)
        }
    }, [current])

    const handleSubmit = useCallback( async (event: FormEvent) => {
        event.preventDefault()

        let serviceInputs: string[] = [];
        if (servicesRef.current != null) {
            serviceInputs = fieldSetToArray(servicesRef.current)
        }

        const res = await fetch("/api/quote", {
            method: "POST",
            body: JSON.stringify({
                lastname: lastnameRef.current?.value,
                firstname: firstnameRef.current?.value,
                email: emailRef.current?.value,
                address: addressRef.current?.value,
                phone: phoneRef.current?.value,
                services: serviceInputs,
                societyName: societyNameRef.current?.value,
                activity: activityRef.current?.value,
                comment: commentRef.current?.value
            })
        })
        router.replace("/")
    }, [])

    return <div className="bg-[#F4F4F4] w-full px-6 py-8 sm:rounded-xl">
        <article hidden={!(current == 1)} id="quote-form-1st-step">
            <form className="h-[512px] flex flex-col justify-between" onSubmit={handleFirstStep}>
                <div>
                    <h2 className=" text-foreground-2 text-2xl pb-4">Informations de contact</h2>
                    <div className=" w-full flex flex-col gap-4 md:grid md:grid-cols-2">
                        <div className={inputDivStyling}>
                            <label className={labelStyling} htmlFor="lastname-quote">
                                Nom
                                <span className="required-mark">*</span>
                            </label>
                            <input ref={lastnameRef} className={inputStyling} type="text" name="lastname" id="lastname-quote" placeholder="Paul" required />
                        </div>
                        <div className={inputDivStyling}>
                            <label className={labelStyling} htmlFor="firstname-quote">
                                Prénom
                                <span className="required-mark">*</span>
                            </label>
                            <input ref={firstnameRef} className={inputStyling} type="text" name="firstname" id="firstname-quote" placeholder="Jean" required />
                        </div>
                        <div className={inputDivStyling + "col-span-2"}>
                            <label className={labelStyling} htmlFor="email-quote">
                                Email
                                <span className="required-mark">*</span>
                            </label>
                            <input ref={emailRef} className={inputStyling} type="email" name="email" id="email-quote" placeholder="ex: jean.paul@domain.com" required />
                        </div>
                        <div className={inputDivStyling + "col-span-2"}>
                            <label className={labelStyling} htmlFor="address-quote">
                                Adresse
                                <span className="required-mark">*</span>
                            </label>
                            <input ref={addressRef} className={inputStyling} type="text" name="address" id="address-quote" placeholder="32 Rue du nettoyage 4000 Sauber" required />
                        </div>
                        <div className={inputDivStyling}>
                            <label className={labelStyling} htmlFor="phone-quote">
                                Téléphone
                                <span className="required-mark">*</span>
                            </label>
                            <input ref={phoneRef} className={inputStyling} type="tel" name="phone" id="phone-quote" placeholder="ex: +32 (472) 00 00 00" required />
                        </div>
                    </div>
                </div>
                <div className=" flex justify-between pt-6">
                    <FormButton onClick={handlePrevious} previous disabled />
                    <FormButton />
                </div>
            </form>
        </article>
        <article hidden={!(current == 2)} id="quote-form-2nd-step">
            <form className=" h-[512px] flex flex-col justify-between" onSubmit={handleSecondStep}>
                <div className=" h-[80%] flex flex-col gap-4">
                    <h2 className={h2Styling}>Choix des services</h2>
                    <fieldset ref={servicesRef} name="services" className=" h-fit overflow-y-scroll pr-2 scroll-smooth">
                        <ul className=" flex flex-col h-full gap-4 md:grid md:grid-cols-2">
                            {servicesCheckboxes}
                        </ul>
                    </fieldset>
                </div>
                <div className=" flex justify-between pt-6">
                    <FormButton onClick={handlePrevious} previous />
                    <FormButton />
                </div>
            </form>
        </article>
        <article hidden={!(current == 3)} id="quote-form-3rd-step">
            <form className="h-[512px] flex flex-col justify-between" onSubmit={handleSubmit}>
                <div className=" flex flex-col gap-4">
                    <h2 className={h2Styling}>Entreprise / Société</h2>
                    <div className=" flex flex-col gap-4">
                        <div className={inputDivStyling}>
                            <label className={labelStyling} htmlFor="society-name-quote">
                                Nom Entreprise
                                <span className="required-mark">*</span>
                            </label>
                            <input ref={societyNameRef} className={inputStyling} type="text" name="society-name" id="society-quote" placeholder="Colle's Cleaning Services" required />
                        </div>
                        <div className={inputDivStyling}>
                            <label className={labelStyling} htmlFor="activity-quote">
                                Domaine d'activité
                                <span className="required-mark">*</span>
                            </label>
                            <input ref={activityRef} className={inputStyling} type="text" name="activity" id="activity-quote" placeholder="Nettoyage" required />
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-4">
                    <h2 className={h2Styling}>Commentaire</h2>
                    <div className={inputDivStyling + "col-span-2"}>
                        <label className={labelStyling} htmlFor="content-contact">
                            Contenu
                        </label>
                        <textarea 
                            ref={commentRef}
                            className={"resize-none h-32 " + inputStyling}
                            name="comment"
                            id="comment-quote"
                            placeholder="En plus je voudrais que vous...">
                        </textarea>
                        <div className=" pt-4">
                            <input className=" contact-input appearance-none w-3 h-3 outline-offset-2 mr-2 bg-[#D4DDDA] outline-[#D4DDDA] outline-2 outline rounded-sm duration-150 checked:bg-primary checked:outline-primary" type="checkbox" id="rgpd-contact" required />
                            <label htmlFor="rgpd-contact">J'ai lu et j'accepte la </label>
                            <a className=" text-primary underline" target="_blank" href="/rgpd">politique de confidentialité</a>
                            <span className="required-mark">*</span>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-between pt-6">
                    <FormButton onClick={handlePrevious} previous />
                    <FormButton value="Envoyer!" />
                </div>
            </form>
        </article>
    </div>
}