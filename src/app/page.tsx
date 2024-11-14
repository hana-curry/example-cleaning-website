import FloatlineSection from "./sections/home/floatline"
import ExpertiseSection from "./sections/home/expertise"
import ServicesSection from "./sections/home/services"
import LocationSection from "./sections/home/location"
import QuoteSection from "./sections/home/quote"

export default function Home() {
    return <>
        <FloatlineSection />
        <ExpertiseSection />
        <ServicesSection />
        <LocationSection />
        <QuoteSection />
    </>
}
