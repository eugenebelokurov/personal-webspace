import Link from "next/link";

import { getWorkStuff } from "../work-stuff/utils";

export default async function WorkStuffOnMainPage() {
    const workStuff = await getWorkStuff(3)

    return (
        <div>
            <div className="flex flex-col gap-2">
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