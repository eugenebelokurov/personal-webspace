import Image from "next/image"
import Link from "next/link";

import { getWorkStuff } from "../work-stuff/utils";
import SectionHeader from "./section-header"


import Work from "../files/work.webp"
import MulberryLeaf from "../files/mulberry-leaf.webp"
import CaseStudy from "./case-study"
import CopyEmailButton from "./copy-email";

export default async function WorkStuff() {
    const workStuff = await getWorkStuff(2)

    return (
        <div className="md:col-span-3 md:pr-2 h-full md:overflow-auto">
          <SectionHeader title="work stuff" alt="Work Image" img={MulberryLeaf} />
          <div className="flex flex-col gap-4 my-4">
            <p>
              here I list selected work which should give you a glimpse into my process and ui skills. 
              i’m always happy to chat with new people, whether you already work on something, or toying with ideas. 
              list of my services should serve as a good conversation starter. 
              grab <a target="_blank" href="/eugene-cv.pdf" className="underline underline-offset-4 decoration-dotted">my cv</a> or <CopyEmailButton/>.
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