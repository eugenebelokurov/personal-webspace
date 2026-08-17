interface CaseVideoProps {
    src: string,
    caption?: string,
}

export default function CaseVideo( { src, caption="" }: CaseVideoProps) {
    return(
        <div
            className="my-10"
        >
            <div
                className="mb-2 border-[1px] border-[#E3E3E0] rounded-md"
            >
            <video autoPlay playsInline loop muted>
                <source src={src} type="video/mp4" />
            </video>
            </div>
            <p
                className="text-[#787876] text-center text-[14px] font-medium"
            >
                {caption}
            </p>
        </div>
    )
}