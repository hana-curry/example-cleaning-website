export default function NavigationLogo() {
    return <div className="hidden sm:block">
        <a href="/">
            <h1 className="hidden">Colle's cleaning services</h1>
            <img className="h-10" aria-hidden="true" src="/images/logo.svg" />
        </a>
    </div>
}