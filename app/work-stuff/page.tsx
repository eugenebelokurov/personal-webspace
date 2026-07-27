import Link from "next/link";

import { getWorkStuff } from "./utils";

export default async function WorkStuff() {

    const workStuffPosts = await getWorkStuff()

    return (
        <div>
            <h1>My case studies</h1>
            <div
                className="flex flex-col gap-2"
            >
                {workStuffPosts.map((post) => (
                        <Link
                            href={post.slug}
                        >
                            <div className = "flex flex-row gap-2">
                                <p>{post.metadata.title}</p>
                                <p>{post.metadata.dateCreated}</p>
                            </div>
                        </Link>
                ))}
            </div>
        </div>
    )
}