import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_KEY)
const to = process.env.RESEND_EMAIL as string
const from = "info@example.colle.dev"

async function send(firstname: string, lastname: string, email: string, content: string) {
    if (typeof firstname != "string") throw new TypeError()
    if (typeof lastname != "string") throw new TypeError()
    if (typeof email != "string") throw new TypeError()
    if (typeof content != "string") throw new TypeError()

    await resend.emails.send({
        from: `${firstname} ${lastname} <${from}>`,
        to: to,
        subject: `Formulaire de contact`,
        html: `Nom: ${firstname}<br>Prenom: ${lastname}<br>Email: ${email}<p>${content}</p>`
    })
}

export async function POST(request: Request) {
    const body = await request.json()
    const { firstname, lastname, email, content } = body
    if (typeof firstname == "string" && typeof lastname == "string" && typeof email == "string") {
        console.log(firstname, lastname, email, content)
        try {
            send(firstname, lastname, email, content)
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