import Image from "next/image"

interface CaseImageProps {
    src: string,
    width: number,
    height: number,
    caption: string
}

export default function CaseImage({ src, width, height, caption} : CaseImageProps) {
    return(
        <div
            className="my-10"
        >
            <div
                 className="mb-2 p-8 border-[1px] border-[#E3E3E0] rounded-md"
            >
                <Image
                    src={src}
                    width={width}
                    height={height}
                    alt={caption}
                />
            </div>
            <p
                className="text-[#787876] text-center text-[14px] font-medium"
            >
                {caption}
            </p>
        </div>
    )
}