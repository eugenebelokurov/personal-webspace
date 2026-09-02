import PublicProfile from "./components/public-profile";
import About from "./components/about"
import NotesThoughts from "./components/notes-thoughts"
import WorkStuff from "./components/work-stuff"

export default function Home() {
  return (
    <div className="p-2 md:p-4 h-full">
      <main className="flex flex-col gap-16 md:h-full md:grid md:grid-cols-18 md:divide-x-2 md:gap-2">
        <About />
        <NotesThoughts />
        <WorkStuff />
        <PublicProfile />
      </main>
    </div>
  );
}
