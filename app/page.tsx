import Image from "next/image";
import Public from "./public.webp";

import PublicProfile from "./components/public-profile";
import About from "./components/about"
import NotesThoughts from "./components/notes-thoughts"
import WorkStuff from "./components/work-stuff"

export default function Home() {
  return (
    <div className="p-4 h-full">
      <main className="h-full grid grid-cols-18 divide-x-2 gap-2">
        <About />
        <NotesThoughts />
        <WorkStuff />
        <PublicProfile />
      </main>
    </div>
  );
}
