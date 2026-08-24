import Image from "next/image"

import Public from "../files/public.webp"

export default function PublicProfile() {
    return (
        <div className="col-span-5">
            <div className="flex flex-row justify-between border-b-2 border-black">
                <p>public profile</p>
                <Image 
                    src={Public}
                    alt="Public image"
                    height={70}
                />
            </div>
            <div>
                <div className="flex flex-row w-full gap-4 my-4">
                    <video className="w-[240px] h-auto" width="20" height="40" preload="auto" autoPlay loop muted playsInline>
                    <source src="/1sec.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                    <p className="">every (almost) day i record a video of what i do. every month i edit a video with one second picked from each day. it helps me to reflect on my life journey.</p>
                </div>
                <a href="https://www.instagram.com/evgenybelokurov/" target="_blank" className="underline underline-offset-6 mb-2">watch more of that</a>
            </div>
            <div className="flex flex-col gap-4 my-4">
                <p>digital trail</p>
                <ul>
                    <li><ExternalLink href="https://www.are.na/eugene-belokurov/channels" label="are.na"/></li>
                    <li><ExternalLink href="https://www.instagram.com/evgenybelokurov/" label="instagram"/></li>
                    <li><ExternalLink href="https://www.linkedin.com/in/eugenebelokurov/" label="linkedin"/></li>
                    <li><ExternalLink href="https://github.com/eugenebelokurov" label="github"/></li>
                </ul>
            </div>
        </div>
    )
}

function ExternalLink({href, label}: {href: string, label: string}) {
    return (
        <a href={href} target="_blank" className="text-black underline underline-offset-6 mb-2 block">{label}</a>
    )
}