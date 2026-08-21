import Image from "next/image"

import Notes from "../files/notes.webp";


export default function NotesThoughts() {
    return (
        <div className="col-span-5 pr-2">
          <div className="flex flex-row justify-between border-b-2 border-black mb-4">
            <p>notes, thoughts, and explorations</p>
            <Image 
              src={Notes}
              alt="Notes image"
              height={70}
            />
          </div>
          <p className="text-[#787876] text-center">Here will be my notes and thoughts</p>
        </div>
    )
}