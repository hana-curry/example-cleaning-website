export default function Footer() {
    return <footer className=" px-2 sm:px-4 md:px-16 bg-foreground-2 text-background py-3 w-full flex justify-center">
        <div className=" gap-3 flex flex-col sm:flex-row items-center sm:justify-between w-full max-w-270">
            <span className="flex gap-2 opacity-70">
                <a className=" underline" href="/contact">Contact</a> |
                <a className=" underline" href="/rgpd">Politique & Co.</a>
            </span>
            <span className="text-center">
            © Copyright Hana Colle 2024
            </span>
        </div>
    </footer>
}