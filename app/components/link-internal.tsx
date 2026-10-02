import Link from "next/link"

interface InternalLinkProps {
    href: string,
    content: string,
}

export default function InternalLink( {href, content } : InternalLinkProps) {
    return (
        <Link 
            href={href}
            className="italic hover:underline hover:underline-offset-4"
        >
            {content}
        </Link>
    )
}