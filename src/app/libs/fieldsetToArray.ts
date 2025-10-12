import { MutableRefObject } from "react"

export default function fieldSetToArray(ref: HTMLFieldSetElement): string[] {
    const arr: string[] = []
    for (let i = 0; i < ref.elements.length; i++) {
        const checkbox: Element | null = ref.elements.item(i)
        if (checkbox instanceof HTMLInputElement) {
            if (checkbox.checked) {
                arr.push(checkbox.value)
            }
        }
    }
    return arr
}