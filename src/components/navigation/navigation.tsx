import NavigationLink from "./navigation-link";
import NavigationLogo from "./navigation-logo";

export default function Navigation() {
    return <header className="fixed flex justify-center bottom-0 sm:bottom-auto bg-background w-full z-100">
        <div className="w-full max-w-270 sm:flex sm:justify-between sm:items-center">
        <NavigationLogo />
            <ul className="flex justify-around">
                <NavigationLink title="Accueil" path="/" />
                <NavigationLink title="Devis" path="/quote" />
                <NavigationLink title="Savoir-faire" path="/expertise" />
                <NavigationLink title="Contact" path="/contact" />
            </ul>
        </div>
    </header>
}