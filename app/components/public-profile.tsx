export default function PublicProfile() {
    return (
        <div className="flex flex-col gap-4 my-4">
            <ul>
                <li><ExternalLink href="https://www.are.na/eugene-belokurov/channels" label="are.na"/></li>
                <li><ExternalLink href="https://www.instagram.com/evgenybelokurov/" label="instagram"/></li>
                <li><ExternalLink href="https://www.linkedin.com/in/eugenebelokurov/" label="linkedin"/></li>
                <li><ExternalLink href="https://github.com/eugenebelokurov" label="github"/></li>
            </ul>
        </div>
    )
}

function ExternalLink({href, label}: {href: string, label: string}) {
    return (
        <a href={href} target="_blank" className="text-black underline underline-offset-6 mb-2 block">{label}</a>
    )
}