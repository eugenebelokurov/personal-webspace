import Image from "next/image"

import Public from "../files/public.webp"
import BirchLeaf from "../files/birch-leaf.webp"
import SectionHeader from "./section-header"

export default function PublicProfile() {
    return (
        <div className="md:col-span-3">
            <SectionHeader title="pulic profile" alt="Public image" img={BirchLeaf} />
            <div className="flex flex-col w-full gap-4 my-4">
                <video className="w-auto h-auto" preload="auto" autoPlay loop muted playsInline>
                <source src="/1sec.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                <div className="flex flex-col gap-4">
                    <p className="">Every (almost) day i record a video of what i do. every month i edit a video with one second picked from each day. it helps me to reflect on my life journey.</p>
                    <a 
                        href="https://www.instagram.com/evgenybelokurov/" target="_blank" 
                        className="underline underline-offset-6 mb-2"
                    >
                        watch more of that
                    </a>
                </div>
            </div>
            <div
                className="border-t border-1 border-dashed border-neutral-600"
            />
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