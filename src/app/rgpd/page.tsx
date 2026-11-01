const h3_class = " text-lg font-bold pt-4"
const ul_class = " list-disc pl-4"

export default function Rgbd() {
    return <section className=" py-20 flex flex-col gap-2 px-6 sm:px-12">
        <h2 className=" text-foreground-2 font-bold text-xl">Politique de Confidentialité (RGPD)</h2>
        <h3 className={h3_class}>Site d'exemple :</h3>
        <p>Ce site est un site d'exemple que j'ai réalisé pour présenter mes capacités en réalisation de site web. Colle's Cleaning Services est une entreprise fictive : aucun service de nettoyage n'est proposé, aucun devis n'est réalisé et aucun contrat n'est conclu.</p>
        <p>Je suis responsable du traitement de vos données.</p>
        <h3 className={h3_class}>Collecte des données :</h3>
        <p>Lorsque vous utilisez le formulaire de contact, je collecte les informations suivantes :</p>
        <ul className={ul_class}>
            <li>Nom</li>
            <li>Prénom</li>
            <li>Email</li>
            <li>Message</li>
        </ul>
        <p>Lorsque vous utilisez le formulaire de devis, je collecte les informations suivantes :</p>
        <ul className={ul_class}>
            <li>Nom</li>
            <li>Prénom</li>
            <li>Email</li>
            <li>Adresse</li>
            <li>Téléphone</li>
            <li>Type de services sélectionnés</li>
            <li>Nom de la Société/Entreprise</li>
            <li>Domaine d'activité de la Société/Entreprise</li>
            <li>Message (commentaire/demandes)</li>
        </ul>
        <p>Lors de l'envoi d'un formulaire, votre adresse IP est également traitée afin de limiter les abus. Elle est conservée temporairement en mémoire, pendant 24 heures au maximum, et n'est jamais enregistrée avec le contenu de votre demande.</p>
        <h3 className={h3_class}>Finalité de la collecte :</h3>
        <ul className={ul_class}>
            <li>Formulaire de contact : répondre à vos questions ou demandes</li>
            <li>Formulaire de devis : démontrer le fonctionnement du formulaire. Les informations me sont envoyées par email, et une copie est envoyée à l'adresse email indiquée, mais elles ne donnent lieu à aucun devis ni à aucune prise de contact</li>
            <li>Adresse IP : protéger les formulaires contre les envois abusifs</li>
        </ul>
        <h3 className={h3_class}>Base légale :</h3>
        <ul className={ul_class}>
            <li>Formulaires de contact et de devis : votre consentement, que vous pouvez retirer à tout moment</li>
            <li>Adresse IP : l'intérêt légitime à protéger le site contre les abus</li>
        </ul>
        <h3 className={h3_class}>Conservation des données :</h3>
        <p>Les informations du formulaire de contact sont conservées le temps nécessaire pour répondre à votre demande, et au maximum 3 ans à compter du dernier échange, puis supprimées.</p>
        <p>Les informations du formulaire de devis ne sont pas utilisées et sont supprimées après réception.</p>
        <p>Vous pouvez demander la suppression de vos données à tout moment.</p>
        <h3 className={h3_class}>Accès aux données :</h3>
        <p>Personne d'autre que moi n'a accès aux informations collectées. Elles sont stockées sous forme d'email.</p>
        <p>Ce site s'appuie sur les services suivants, qui traitent vos données pour son fonctionnement :</p>
        <ul className={ul_class}>
            <li>Vercel Inc. (États-Unis) : hébergement du site et traitement des requêtes</li>
            <li>Resend (États-Unis) : envoi des emails générés par les formulaires</li>
            <li>OpenStreetMap Foundation (Royaume-Uni) : affichage de la carte, qui reçoit votre adresse IP lors du chargement des tuiles</li>
        </ul>
        <p>Les transferts vers les États-Unis sont encadrés par le Data Privacy Framework UE-États-Unis ou par les clauses contractuelles types de la Commission européenne. Le Royaume-Uni bénéficie d'une décision d'adéquation de la Commission européenne.</p>
        <h3 className={h3_class}>Vos droits :</h3>
        <p>Conformément au RGPD, vous avez le droit de demander l'accès, la rectification, l'effacement, la limitation ou la portabilité de vos données personnelles, ainsi que de vous opposer à leur traitement ou de retirer votre consentement.
        Pour exercer ces droits, vous pouvez utiliser le formulaire de contact.</p>
        <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une plainte auprès de l'Autorité de protection des données (www.autoriteprotectiondonnees.be).</p>
    </section>
}
