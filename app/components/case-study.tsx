import Link from "next/link"
import Image from 'next/image'

interface CaseStudyProps {
    href: string,
    title: string,
    cover?: string, // make sure the cover is stored in 'public/' folder
}

export default function CaseStudy({ href, title, cover } : CaseStudyProps) {
    return (
        <Link 
            href={href}
            className="flex flex-col gap-2"
        >
            <p>{title}</p>
            {cover && 
            <Image 
                src={cover}
                alt="cover"
                width={500}
                height={500}
            />
            }
            <p className="underline underline-offset-4 mb-2">read more</p>
        </Link>
    )
}