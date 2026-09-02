import Link from "next/link";

import { getWorkStuff } from "./utils";

export default async function WorkStuff() {

    const workStuffPosts = await getWorkStuff()

    return (
        <div
            className="mx-auto my-10 max-w-2xl flex flex-col gap-4 px-2"
        >
            <div className="flex flex-row gap-1">
                <Link href="/">Home</Link>
                <p>/</p>
                <p className="text-[#1AA809]">All cases</p>
            </div> 
            <h1>My case studies</h1>
            <div
                className="flex flex-col gap-2"
            >
                {workStuffPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={post.slug}
                        >
                            <div className = "flex flex-row gap-2">
                                <p>{post.metadata.title}</p>
                                <p
                                    className="text-gray-500"
                                >{post.metadata.dateCreated}</p>
                            </div>
                        </Link>
                ))}
            </div>
        </div>
    )
}