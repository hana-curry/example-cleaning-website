import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_KEY)
const to = process.env.RESEND_EMAIL as string
const from = "info@example.colle.dev"

type bodyParam = {
    lastname: string,
    firstname: string,
    email: string,
    address: string,
    phone: string,
    services: string[],
    societyName: string,
    activity: string,
    comment:string
}

async function send(
    lastname: string, firstname: string, email: string, address: string,
    societyName: string, phone: string, services: string[], activity: string,
    comment: string
) {
    await resend.emails.send({
        from: `${firstname} ${lastname} <${from}>`,
        to: to,
        subject: `Demande de devis`,
        html: `
        Informations <br>
        - Nom: ${lastname} <br>
        - Prénom: ${firstname} <br>
        - Email: ${email} <br>
        - Téléphone: ${phone} <br>
        - Addresse: ${address} <br><br>
        Entreprise / Société <br>
        - Entreprise: ${societyName} <br>
        - Secteur d'activité: ${activity} <br>
        ${services.length > 0 ? "- Services demandés: "+services.join(", ")+"<br>" : ""} <br>
        ${comment != "" ? "Commentaire <br>"+comment+"" : ""}`
    })
}

export async function POST(request: Request) {
    const body = await request.json()
    const {
        firstname, lastname, email, address, phone,
        services, societyName, activity, comment
    }: bodyParam = body

    if (
        typeof firstname == "string" && typeof lastname == "string" &&
        typeof email == "string" && typeof address == "string" &&
        typeof phone == "string" && typeof societyName == "string" &&
        typeof activity == "string" && typeof comment == "string" &&
        services instanceof Array
    ) {
        try {
            send(lastname, firstname, email, address, societyName, phone, services, activity, comment)
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