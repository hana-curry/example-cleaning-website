import { Resend } from "resend"
import TextToHtml from "@/utils/TextToHtml"

const resend = new Resend(process.env.RESEND_KEY)
const to = process.env.ADMIN_EMAIL as string
const from = process.env.RESEND_EMAIL as string

async function send(firstname: string, lastname: string, email: string, content: string) {
    if (typeof firstname != "string") throw new TypeError()
    if (typeof lastname != "string") throw new TypeError()
    if (typeof email != "string") throw new TypeError()
    if (typeof content != "string") throw new TypeError()

    const safeContent = TextToHtml.safeConvert(content)

    const res = await resend.batch.send([{
        from: `Colle Example Website <${from}>`,
        to: to,
        subject: `Formulaire de contact`,
        html: `Nom: ${TextToHtml.safeConvert(lastname)}<br>Prénom: ${TextToHtml.safeConvert(firstname)}<br>Email: ${TextToHtml.safeConvert(email)}<br><br>${safeContent}`
    },{
        from: `Colle Example Website <${from}>`,
        to: email,
        subject: `Confirmation d'envoi du formulaire de contact`,
        html: `Votre message a bien été envoyé!`
    }])
}

export async function POST(request: Request) {
    const body = await request.json()
    const { firstname, lastname, email, content } = body
    if (typeof firstname == "string" && typeof lastname == "string" && typeof email == "string") {
        try {
            await send(firstname, lastname, email, content)
        } catch(err) {
            console.error(err)
            return new Response("Server side error", {
                status: 500
            })
        }

        return new Response("Message sent!", {
            status: 200
        })
    } else {
        return new Response("Not every input has been filled!", {
            status: 400
        })
    }
}