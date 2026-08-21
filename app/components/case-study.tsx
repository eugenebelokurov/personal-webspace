import Link from "next/link"
import Image from 'next/image'

interface CaseStudyProps {
    href: string,
    title: string,
    // make sure the cover is stored in 'public/' folder
    cover?: string,
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
            <p className="underline">read more</p>
        </Link>
    )
}