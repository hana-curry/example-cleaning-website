"use client"
import { FormEvent, useRef } from "react"
import { useRouter } from "next/navigation"

const inputStyling = " contact-input bg-[#D4DDDA] text-[#365F54] placeholder-[#839C95] rounded-lg px-3 py-1.5"
const inputDivStyling = " flex flex-col "
const labelStyling = " text-foreground-2 pb-1 "

export default function ContactForm() {

    const router = useRouter()

    const lastnameRef = useRef<HTMLInputElement | null>(null)
    const firstnameRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const contentRef = useRef<HTMLTextAreaElement | null>(null)

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
                lastname: lastnameRef.current?.value,
                firstname: firstnameRef.current?.value,
                email: emailRef.current?.value,
                content: contentRef.current?.value
            })
        })
        router.replace("/")
    }

    return <form onSubmit={handleSubmit} className=" flex flex-col gap-6 items-end">
    <div className=" grid grid-cols-2 gap-x-4 gap-y-2.5 w-full">
        <div className={inputDivStyling}>
            <label className={labelStyling} htmlFor="lastname-contact">
                Nom
                <span className="required-mark">*</span>
            </label>
            <input ref={lastnameRef} className={inputStyling} type="text" name="lastname" id="lastname-contact" placeholder="Paul" required />
        </div>
        <div className={inputDivStyling}>
            <label className={labelStyling} htmlFor="firstname-contact">
                Prénom
                <span className="required-mark">*</span>
            </label>
            <input ref={firstnameRef} className={inputStyling} type="text" name="firstname" id="firstname-contact" placeholder="Jean" required />
        </div>
        <div className={inputDivStyling + "col-span-2"}>
            <label className={labelStyling} htmlFor="email-contact">
                Email
                <span className="required-mark">*</span>
            </label>
            <input ref={emailRef} className={inputStyling} type="email" name="email" id="email-contact" placeholder="ex: jean.paul@domain.com" required />
        </div>
        <div className={inputDivStyling + "col-span-2"}>
            <label className={labelStyling} htmlFor="content-contact">
                Contenu
            </label>
            <textarea 
                ref={contentRef}
                className={"resize-none h-24 " + inputStyling}
                name="content"
                id="content-contact"
                placeholder="Je voudrais en savoir plus sur votre entreprise...">
            </textarea>
        </div>
    </div>
    <div className=" flex flex-col gap-4 sm:flex-row justify-between w-full items-end sm:items-center">
        <div>
            <input className=" contact-input appearance-none w-3 h-3 outline-offset-2 mr-2 bg-[#D4DDDA] outline-[#D4DDDA] outline-2 outline rounded-sm duration-150 checked:bg-primary checked:outline-primary" type="checkbox" id="rgpd-contact" required />
            <label htmlFor="rgpd-contact">J'ai lu et j'accepte la </label>
            <a className=" text-primary underline" target="_blank" href="/rgpd">politique de confidentialité</a>
            <span className="required-mark">*</span>
        </div>
        <input
            className=" cursor-pointer py-2.5 px-8 bg-[#D4DDDA] text-[#365F54] rounded-lg hover:bg-foreground-2 focus:bg-foreground-2 hover:text-[#D4DDDA] focus:text-[#D4DDDA] duration-300"
            type="submit"
            value="Envoyer"
        />
    </div>
</form>
}