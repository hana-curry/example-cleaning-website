import { Metadata } from "next"
import dynamic from 'next/dynamic'
import FloatlineSection from "./sections/home/floatline"
import ExpertiseSection from "./sections/home/expertise"
import ServicesSection from "./sections/home/services"
import LocationSection from "./sections/home/location"
import QuoteSection from "./sections/home/quote"

export const metadata: Metadata = {
    description: "Chez Colle Cleaning Services, nous proposons des services de nettoyage de haute qualité, adaptés aux besoins de chaque client. Grâce à notre équipe souriante et professionnelle. (ce site n'est pas un vrai site d'une vraie entreprise, mais un exemple de mes capacités en réalisation de site web!)"
}

export default function Home() {
    return <>
        <FloatlineSection />
        <ExpertiseSection />
        <ServicesSection />
        <LocationSection />
        <QuoteSection />
    </>
}
