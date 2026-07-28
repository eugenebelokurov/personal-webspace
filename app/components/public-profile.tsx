export default function PublicProfile() {
    return (
        <ul>
            <li><ExternalLink href="https://www.are.na/eugene-belokurov/channels" label="are.na"/></li>
            <li><ExternalLink href="https://www.instagram.com/evgenybelokurov/" label="instagram"/></li>
            <li><ExternalLink href="https://www.linkedin.com/in/eugenebelokurov/" label="linkedin"/></li>
            <li><ExternalLink href="https://github.com/eugenebelokurov" label="github"/></li>
        </ul>
    )
}

function ExternalLink({href, label}: {href: string, label: string}) {
    return (
        <a href={href} target="_blank" className="text-black underline underline-offset-6 mb-2 block">{label}</a>
    )
}