const inputStyling = " contact-input bg-[#D4DDDA] text-[#365F54] placeholder-[#839C95] rounded-lg px-3 py-1.5"
const inputDivStyling = " flex flex-col "
const labelStyling = " text-foreground-2 pb-1 "

export default function Contact() {
    return <div className=" flex flex-col gap-14 w-full items-center pb-16">
        <h2 className=" pt-10 text-center text-3xl md:text-4xl">Contactez-nous</h2>
        <div className=" w-[80%] flex flex-col gap-16 md:grid md:grid-cols-3">
            <section className=" col-span-2" id="contact-form-section">
                <form action="" className=" flex flex-col gap-6 items-end">
                    <div className=" grid grid-cols-2 gap-x-4 gap-y-2.5 w-full">
                        <div className={inputDivStyling}>
                            <label className={labelStyling} htmlFor="lastname-contact">
                                Nom
                                <span className="required-mark">*</span>
                            </label>
                            <input className={inputStyling} type="text" name="lastname-contact" id="lastname-contact" placeholder="Jean" required />
                        </div>
                        <div className={inputDivStyling}>
                            <label className={labelStyling} htmlFor="firstname-contact">
                                Prénom
                                <span className="required-mark">*</span>
                            </label>
                            <input className={inputStyling} type="text" name="firstname-contact" id="firstname-contact" placeholder="Paul" required />
                        </div>
                        <div className={inputDivStyling + "col-span-2"}>
                            <label className={labelStyling} htmlFor="email-contact">
                                Email
                                <span className="required-mark">*</span>
                            </label>
                            <input className={inputStyling} type="email" name="email-contact" id="email-contact" placeholder="ex: jean.paul@domain.com" required />
                        </div>
                        <div className={inputDivStyling + "col-span-2"}>
                            <label className={labelStyling} htmlFor="content-contact">
                                Contenu
                            </label>
                            <textarea 
                                className={"resize-none h-24 " + inputStyling}
                                name="content-contact"
                                id="content-contact"
                                placeholder="Je voudrais en savoir plus sur votre entreprise...">
                            </textarea>
                        </div>
                    </div>
                    <div>
                        <input
                            className=" cursor-pointer py-2.5 px-8 bg-[#D4DDDA] text-[#365F54] rounded-lg hover:bg-foreground-2 focus:bg-foreground-2 hover:text-[#D4DDDA] focus:text-[#D4DDDA] duration-300"
                            type="submit"
                            value="Envoyer"
                        />
                    </div>
                </form>
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