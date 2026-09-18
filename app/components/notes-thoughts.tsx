import Image from "next/image"

import Notes from "../files/notes.webp";


export default function NotesThoughts() {
    return (
        <div className="md:col-span-3 md:pr-2">
          <div className="flex flex-row justify-between border-b-2 border-black mb-4">
            <Image 
              src={Notes}
              alt="Notes image"
              height={64}
            />
            <p>notes and thoughts</p>
          </div>
          <p className="text-[#787876] text-center">Here will be my notes and thoughts</p>
        </div>
    )
}