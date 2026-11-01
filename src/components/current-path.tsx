"use client"

import { usePathname } from "next/navigation"

export default function CurrentPath({className}: {className?: string}) {
    const path = usePathname()
    return <span className={className}>({path})</span>
}
