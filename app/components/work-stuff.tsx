import Image from "next/image"
import Link from "next/link";

import { getWorkStuff } from "../work-stuff/utils";

import Work from "../files/work.webp"
import CaseStudy from "./case-study"
import CopyEmailButton from "./copy-email";

export default async function WorkStuff() {
    const workStuff = await getWorkStuff(3)

    return (
        <div className="md:col-span-5 md:pr-2 h-full md:overflow-auto">
          <div className="flex flex-row justify-between border-b-2 border-black bg-[#ffffff] md:sticky md:top-0">
            <Image 
              src={Work}
              alt="Work image"
              height={64}
            />
            <p>work stuff</p>
          </div>
          <div className="flex flex-col gap-4 my-4">
            <p>
              here I list selected work which should give you a glimpse into my process and ui skills. 
              i’m always happy to chat with new people, whether you already work on something, or toying with ideas. 
              list of my services should serve as a good conversation starter. 
              grab <a target="_blank" href="/eugene-cv.pdf" className="underline decoration-dotted">my cv</a> or <CopyEmailButton/>.
            </p>
              <div
                className="border-t border-1 border-dashed border-neutral-600"
              />
            
            <div className="flex flex-col gap-4">
                {
                    workStuff.map((post) => (
                        <CaseStudy key={post.slug} href={post.slug} title={post.metadata.title} cover={post.metadata.cover}/>
                    ))
                }
            </div>
            <Link
                href="/work-stuff"
            >
                All case studies → 
            </Link>
          </div>
        </div>
    )
}