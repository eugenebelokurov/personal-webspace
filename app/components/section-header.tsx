import Image, { StaticImageData } from "next/image"

interface SectionHeaderProps {
    title: string,
    alt: string,
    img: StaticImageData,
}

export default function SectionHeader( { title, alt, img } : SectionHeaderProps) {
    return (
       <div className="flex flex-row justify-between border-b-2 border-black bg-[#ffffff] md:sticky md:top-0">
            <Image 
              src={img}
              alt={alt}
              height={64}
            />
            <p>{title}</p>
          </div>
    )
}