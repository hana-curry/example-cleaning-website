import Link from "next/link"

export default function QuoteSection({}) {
    return <>
        <section className=" w-full flex justify-center">
            <div className=" w-[80%] max-w-[1080px]">
                <Link className=" w-full h-16 bg-foreground-2 text-background text-lg flex justify-center items-center rounded-md mb-16 relative before:block before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-foreground-2 before:opacity-80 duration-300 before:duration-300 hover:-translate-y-2 focus:-translate-y-2 hover:before:translate-y-2 focus:before:translate-y-2" href="/quote">
                    Faire un devis
                </Link>
            </div>
        </section>
    </>
}