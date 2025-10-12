const h3_class = " text-lg font-bold pt-4"
const ul_class = " list-disc pl-4"

export default function Rgbd() {
    return <section className=" py-20 flex flex-col gap-2 px-6 sm:px-12">
        <h2 className=" text-foreground-2 font-bold text-xl">Politique de Confidentialité (RGPD)</h2>
        <h3 className={h3_class}>Collecte des données :</h3>
        <p>Lorsque vous utilisez notre formulaire de contact, nous collectons les informations suivantes :</p>
        <ul className={ul_class}>
            <li>Nom</li>
            <li>Prénom</li>
            <li>Email</li>
            <li>Message</li>
        </ul>
        <p>Lorsque vous utilisez notre formulaire de devis, nous collectons les informations suivantes :</p>
        <ul className={ul_class}>
            <li>Nom</li>
            <li>Prénom</li>
            <li>Email</li>
            <li>Adresse</li>
            <li>Téléphone</li>
            <li>Type de services que vous/votre entreprise souhaiterais</li>
            <li>Nom de votre Société/Entreprise</li>
            <li>Domaine d'activite de votre Société/Entreprise</li>
            <li>Message (commentaire/demandes)</li>
        </ul>
        <h3 className={h3_class}>Finalité de la collecte :</h3>
        <p>Ces informations sont utilisées uniquement pour :</p>
        <ul className={ul_class}>
            <li>Répondre à vos demandes ou questions</li>
            <li>Résoudre d'éventuels problèmes</li>
            <li>Prendre contact avec vous dans le cadre de nos services</li>
        </ul>
        <h3 className={h3_class}>Conservation des données :</h3>
        <p>Vos informations sont conservées sans durée limite, sauf en cas de demande expresse de suppression de votre part.</p>
        <h3 className={h3_class}>Accès aux données :</h3>
        <p>Seul notre directeur commercial a accès aux informations collectées. Ces informations peuvent être partagées si nécessaire pour traiter votre demande. Elles sont stockées sous forme d'email.</p>
        <h3 className={h3_class}>Protection des données :</h3>
        <p>Nous prenons des mesures pour garantir la sécurité de vos informations. Elles sont protégées contre tout accès non autorisé et ne sont partagées avec aucun tiers non impliqué dans le traitement de votre demande.</p>
        <h3 className={h3_class}>Vos droits :</h3>
        <p>Conformément au RGPD, vous avez le droit de demander l'accès, la modification ou la suppression de vos données personnelles.
        Pour exercer ces droits, vous pouvez nous contacter via :</p>
        <ul className={ul_class}>
            <li>Téléphone - (+32) 000 00 00 00</li>
            <li>Email - nom.prénom@colle.dev</li>
            <li>Notre formulaire de contact</li>
        </ul>
    </section>
}