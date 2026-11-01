import { Resend } from "resend"
import TextToHtml from "@/utils/TextToHtml"

const resend = new Resend(process.env.RESEND_KEY)
const to = process.env.ADMIN_EMAIL as string
const from = process.env.RESEND_EMAIL as string

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
    const details = `
        Informations <br>
        - Nom: ${TextToHtml.safeConvert(lastname)} <br>
        - Prénom: ${TextToHtml.safeConvert(firstname)} <br>
        - Email: ${TextToHtml.safeConvert(email)} <br>
        - Téléphone: ${TextToHtml.safeConvert(phone)} <br>
        - Adresse: ${TextToHtml.safeConvert(address)} <br><br>
        Entreprise / Société <br>
        - Entreprise: ${TextToHtml.safeConvert(societyName)} <br>
        - Secteur d'activité: ${TextToHtml.safeConvert(activity)} <br>
        ${services.length > 0 ? "- Services demandés: "+services.map(service => TextToHtml.safeConvert(String(service))).join(", ")+"<br>" : ""} <br>
        ${comment != "" ? "Commentaire <br>"+TextToHtml.safeConvert(comment) : ""}`

    const res = await resend.batch.send([{
        from: `Colle Example Website <${from}>`,
        to: to,
        subject: `Demande de devis`,
        html: details
    },{
        from: `Colle Example Website <${from}>`,
        to: email,
        subject: `Confirmation d'envoi de la demande de devis`,
        html: `Votre demande de devis a bien été envoyée!`
    }])
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
            await send(lastname, firstname, email, address, societyName, phone, services, activity, comment)
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
