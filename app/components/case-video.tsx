interface CaseVideoProps {
    src: string,
    caption?: string,
}

export default function CaseVideo( { src, caption="" }: CaseVideoProps) {
    return(
        <div>
            <video className="border border-amber-400">
                <source src={src} type="video/mp4"/>
            </video>
            <p>{caption}</p>
        </div>
    )
}