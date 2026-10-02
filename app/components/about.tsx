import Image from "next/image"

import InternalLink from "./link-internal"
import ExternalLInk from "./link-external"

import EugeneProfile from "../files/eugene-profile.webp";

export default function About() {
    return (
        <div className="md:col-span-2 md:pr-2 h-full">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <p className="pb-2">Hi stranger. You landed in my personal space in the internet</p>
                    <Image
                        src={EugeneProfile}
                        alt="Eugene's profile image"
                        className="py-2"
                        width={111}
                    />
                    <p className="font-bold">Eugene Belokurov</p>
                    <p className="italic mb-2">Gardner of this webspace</p>
                    <p className="mb-2">
                        Things I’m interested at currently: getting better at my job, 
                        supporting{" "}
                        <ExternalLInk href="https://www.lanaurbanlab.com/" content="my wife"/>{" "}
                        at getting MSc degree, swimming, finding my style.
                    </p>
                    <p className="mb-2">
                        This version of my website is a work in progress. It’s in its fifth reincarnation and focuses 
                        less on work and more on things I do outside of work, don’t be surprised to find mistakes and 
                        rough edges. I am still figuring out what this space in the web will become, but so far the 
                        idea is to make myself familiar to the people who randomly find me online.{" "}
                        <InternalLink href="/about" content="Read more"/>
                    </p>
                </div>
                <div className="hidden md:flex md:flex-col">
                    <p className="mb-2">Made by hand using ♡, HTML, CSS, and TS</p>
                    <p className="mb-2">Last updated: September 2026</p>
                </div>
            </div>
        </div>
    )
}