import QuoteFrom from "@/components/quote-from";


export default function Quote() {
    return <div className="sm:grid sm:grid-flow-col">
        <section id="quote-from-section" className=" flex flex-col gap-3 w-full items-center pt-12 overflow-hidden sm:col-span-2 sm:p-4 md:p-10">
            <div className=" w-[80%]">
                <h2 className=" text-3xl">Faire un devis</h2>
                <p className=" pb-6">Laissez-nous vous guider lors de la réalisation d’un devis de nettoyage, si vous le souhaitez, vous pouvez l’envoyer ou l’annuler au dernier moment.</p>
            </div>
            <QuoteFrom />
        </section>
        <section id="quote-info-section" className=" flex flex-col items-center bg-[#EAEAEA] gap-6 pb-12">
            <img src="/images/quote-side-img.jpg" alt="" />
            <div className=" w-[80%] flex flex-col gap-6">
                <h2 className=" text-3xl">Notre expertise</h2>
                <p>Avec 25 ans d'expérience, nous connaissons parfaitement le terrain du nettoyage. Notre expertise assure des services adaptés, un professionnalisme exemplaire et des résultats impeccables.</p>
                <p>Avec notre expertise et nos techniques professionnelles, nous assurons un Grand Nettoyage rapide et efficace, pour des résultats impeccables.</p>
            </div>
        </section>
    </div>
}