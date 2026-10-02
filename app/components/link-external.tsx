interface ExternalLinkProps {
    href: string,
    content: string,
}

export default function ExternalLink( {href, content } : ExternalLinkProps) {
    return (
        <a 
            href={href}
            target="_blank"
            className="italic hover:underline hover:underline-offset-4"
        >
            {content}
        </a>
    )
}