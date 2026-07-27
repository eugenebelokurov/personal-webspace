import Image from "next/image";
import EugeneProfile from "./eugene-profile.webp";
import Notes from "./notes.webp";
import Work from "./work.webp";
import Public from "./public.webp";

import WorkStuffOnMainPage from "./components/work-stuff-on-main-page";
import PublicProfile from "./components/public-profile";

export default function Home() {
  return (
    <div className="p-4 h-screen">
      <main className="h-full grid grid-cols-18 divide-x-2 gap-2">
        <div className="col-span-3">
          <p>you landed in my personal space in the internet</p>
          <Image
            src={EugeneProfile}
            alt="Eugene's profile image"
          />
          <p>things i’m interested at currently: getting better at my job, supporting my wife at getting msc degree, swimming, finding my style.</p>
        </div>
        <div className="col-span-5">
          <div className="flex flex-row justify-between border-b-2 border-black">
            <p>notes, thoughts, and explorations</p>
            <Image 
              src={Notes}
              alt="Notes image"
              height={70}
            />
          </div>
        </div>
        <div className="col-span-5">
          <div className="flex flex-row justify-between border-b-2 border-black">
            <p>work stuff</p>
            <Image 
              src={Work}
              alt="Work image"
              height={70}
            />
          </div>
          <WorkStuffOnMainPage />
        </div>
        <div className="col-span-5">
          <div className="flex flex-row justify-between border-b-2 border-black">
            <p>public profile</p>
            <Image 
              src={Public}
              alt="Public image"
              height={70}
            />
          </div>
          <PublicProfile />
        </div>
      </main>
    </div>
  );
}
