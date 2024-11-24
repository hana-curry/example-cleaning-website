import PrimaryLink from "@/app/components/primaryLink";

export default function ExpertiseSection({}) {
    return <section className=" flex justify-center pt-16 pb-24">
        <div className=" w-[80%] flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-x-14 sm:gap-y-4" >
            <h2 className="text-2xl text-foreground-2 font-semibold">Notre <span className="z-10 w-fit relative before:block before:absolute before:inset-0 before:top-[40%] before:-translate-x-1.5 before:translate-y-0.5 before:rounded-md before:-z-10 before:bg-background-2" >savoir faire</span></h2>
            <div className=" sm:row-span-2 sm:h-fit w-full relative before:absolute before:block before:inset-0 before:translate-x-8 before:translate-y-8 before:dot-background mr-8">
                <img width={404} src="/images/home_expertise.jpg" className=" relative w-full" alt="Une main qui tient un pulvérisateur d'eau dans une pièce vide en bois claire" />
            </div>
            <div className=" flex flex-col gap-6">
                <p>Avec 25 ans d'expérience, nous connaissons parfaitement le terrain du nettoyage. Notre expertise assure des services adaptés, un professionnalisme exemplaire et des résultats impeccables.</p>
                <PrimaryLink href="/expertise">En savoir plus</PrimaryLink>
            </div>
        </div>
    </section>
}