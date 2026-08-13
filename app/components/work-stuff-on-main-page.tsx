import Link from "next/link";

import { getWorkStuff } from "../work-stuff/utils";

export default async function WorkStuffOnMainPage() {
    const workStuff = await getWorkStuff(3)

    return (
        <div className="flex flex-col gap-4 my-4">
            <p>here I list selected work which should give you a glimpse into my process and ui skills. i’m always happy to chat with new people, whether you already work on something, or toying with ideas. list of my services should serve as a good conversation starter. grab my cv or copy email.</p>
            <div className="flex flex-col gap-4">
                {
                    workStuff.map((post) => (
                        //TODO: component for case study on the main page
                        <Link 
                            href={post.slug}
                        >
                            <p>{post.metadata.title}</p>
                        </Link>
                    ))
                }
            </div>
            <Link
                href="/work-stuff"
            >
                All case studies → 
            </Link>
        </div>
    )
}