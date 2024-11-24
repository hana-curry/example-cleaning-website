"use client"

import { usePathname } from "next/navigation"
import PrimaryLink from "./components/primaryLink"
import SecondaryLink from "./components/secondaryLink"
import { Metadata } from "next"

export const metadata: Metadata = {
    robots: "noindex, nofollow",
}

export default function Error({error, reset}: {
    error: Error & { digest?: string},
    reset: () => void
}) {

    const path = usePathname()

    return <section id="section-not-found" className=" flex justify-center w-full lg:dot-background py-16">
        <div className=" w-[80%] flex gap-10 flex-col">
            <h2 className=" text-wrong text-5xl font-bold">Ooops....</h2>
            <div>
                <p className=" inline text-xl">La page que vous cherchez n’existe pas ou n’existe plus, si le probleme persiste,
                    n’hesitez pas a nous a nous demander de l’aide.
                </p>
                <span className=" text-sm ml-6">({path})</span>
            </div>
            <div className=" flex gap-4">
                <PrimaryLink black={true} href="/">Retour</PrimaryLink>
                <SecondaryLink href="contact">Contact</SecondaryLink>
            </div>
        </div>
    </section>
}