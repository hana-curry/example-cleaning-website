"use client"
import { FormEvent, useMemo } from "react"

type Props = {
    children?: string,
    value?: string,
    className?: string,
    previous?: boolean,
    disabled?: boolean,
    onClick?: () => void
}

export default function FormButton({children, value, className, previous, onClick, disabled}: Props) {

    const color_class = useMemo(() => {
        return previous ?
            " bg-[#D4DDDA] text-[#839C95] hover:bg-[#ADD3C6] focus:bg-[#ADD3C6] hover:text-foreground-2 focus:text-foreground-2 duration-200 disabled:opacity-80 disabled:cursor-not-allowed" :
            " bg-foreground-2 text-background hover:bg-[#116352] focus:bg-[#116352] duration-200"
    }, [previous])

    const input_class = useMemo(() => {
        return "px-4 py-2 rounded-lg cursor-pointer" + " " + color_class + " " + (className ?? "")
    }, [className, color_class])

    const input_value: string = useMemo<string>(() => {
        return children ?? value ?? (previous ? "Précédent" : "Suivant")
    }, [value, children])

    const input_type: "button" | "submit" = useMemo<"button" | "submit">(() => {
        return previous ? "button" : "submit"
    }, [previous])

    return <input disabled={disabled ?? false} onClick={onClick ?? undefined} type={input_type} className={input_class} value={input_value} />
}