import Image from "next/image"

import EugeneProfile from "../files/eugene-profile.webp";

export default function About() {
    return (
        <div className="md:col-span-3 md:pr-4 h-full">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <p className="pb-2">you landed in my personal space in the internet</p>
                        <Image
                            src={EugeneProfile}
                            alt="Eugene's profile image"
                            className="py-2"
                        />
                    <p className="mb-2">
                        things i’m interested at currently: getting better at my job, supporting my wife at 
                        getting msc degree, swimming, finding my style.
                    </p>
                    <p className="mb-2">
                        this is very much work in progress
                    </p>
                </div>
                <div className="hidden md:flex md:flex-col">
                    <p className="mb-2">made by me using ♡, HTML, CSS and JS</p>
                    <p className="mb-2">last updated: August 2026</p>
                </div>
            </div>
        </div>
    )
}