import PrimaryLink from "@/app/components/primaryLink";
import SecondaryLink from "@/app/components/secondaryLink";

export default function loatlineSection({}) {
    return <section className=" flex justify-center bg-floatline-mobile md:bg-floatline h-[500px] sm:h-[400px] lg:rounded-md bg-cover bg-center pt-8 md:pt-0 md:items-center">
        <div className=" flex flex-col w-[80%] gap-6">
            <h2 className=" text-foreground-2 text-2xl sm:text-3xl flex flex-col md:flex-row md:gap-3">
                <span className=" font-bold">Colle's</span>
                <span className=" z-10 font-semibold w-fit relative before:block before:absolute before:inset-0 before:top-[40%] before:-translate-x-2 before:translate-y-0.5 before:rounded-lg before:-z-10 before:bg-background-2">Cleaning Services</span>
            </h2>
            <p className=" text-lg max-w-[500px]">Entreprise de nettoyage professionnelle, souriante, avec 25 ans d'expérience. Services impeccables et personnalisés.</p>
            <div className=" flex flex-col sm:flex-row gap-4">
                <PrimaryLink href="/contact">Contact</PrimaryLink>
                <SecondaryLink href="/expertise">Savoir-faire</SecondaryLink>
            </div>
        </div>
    </section>
}