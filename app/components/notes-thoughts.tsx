import Image from "next/image"

import Notes from "../files/notes.webp";
import BananaLeaf from "../files/banana-leaf.webp"

import SectionHeader from "./section-header"

export default function NotesThoughts() {
    return (
        <div className="md:col-span-3 md:pr-2">
          <SectionHeader title="work and stuff" alt="Notes image" img={BananaLeaf}/>
          <p className="text-[#787876] text-center mt-4">Here will be my notes and thoughts</p>
        </div>
    )
}