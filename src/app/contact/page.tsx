import { Metadata } from "next"
import ContactForm from "../components/contact-form"

export const metadata: Metadata = {
    description: "Vous avez une question sur nos services de nettoyage ? Contactez-nous via (+32) 000 00 00 00, nom.prenom@colle.dev, ou visitez-nous à Adresse du siege social. Vous pouvez également remplir notre formulaire de contact"
}

export default function Contact() {
    return <div className=" flex flex-col gap-14 w-full items-center pb-16">
        <h2 className=" pt-10 text-center text-3xl md:text-4xl">Contactez-nous</h2>
        <div className=" w-[80%] flex flex-col gap-16 md:grid md:grid-cols-3">
            <section className=" col-span-2" id="contact-form-section">
                <ContactForm />
            </section>
            <section id="contact-info-section">
                <h3 className=" text-lg pb-3">Autres moyens</h3>
                <ul className=" flex flex-col gap-2">
                    <li className=" text-sm flex gap-3">
                        <img className="w-4" src="/images/phone.svg" alt="Téléphone" />
                        <span>(+32) 000 00 00 00</span>
                    </li>
                    <li className=" text-sm flex gap-3">
                        <img className="w-4" src="/images/mail.svg" alt="Email" />
                        <span>nom.prénom@colle.dev</span>
                    </li>
                </ul>

                <div className=" w-11 h-[2px] rounded bg-foreground opacity-35 my-6"></div>

                <h3 className=" text-lg pb-3">Ou nous trouver?</h3>
                <ul className=" flex flex-col gap-2">
                    <li className=" text-sm flex gap-3">
                        <img className="w-4" src="/images/pin.svg" alt="Punaise de carte" />
                        <span>Adresse du siege social</span>
                    </li>
                    <li className=" text-sm flex gap-3">
                        <img className="w-4" src="/images/tva.svg" alt="Un cercle avec un 'i' à l'intérieur" />
                        <span>TVA 0000.000.000</span>
                    </li>
                </ul>
            </section>
        </div>
    </div>
}