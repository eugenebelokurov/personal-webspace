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
            className="mb-10"
        >
            <div
                 className="mb-4 p-8 border-2 border-gray-200 bg-gray-50 rounded-xl"
            >
                <Image
                    src={src}
                    width={width}
                    height={height}
                    alt={caption}
                />
            </div>
            <p
                className="text-gray-500 px-4"
            >
                {caption}
            </p>
        </div>
    )
}