import Link from "next/link";

async function getWorkStuff() {

    //TODO: get dir as a parameter
    const dir = "app/work-stuff/posts"

    //TODO: get list of files in dir
    const listOfWorkStuff = ["post-one.mdx", "post-two.mdx"]

    const postPromises = listOfWorkStuff.map(async(post) => {
        let postContent = await import(`./posts/${post}`)
        let metadata = postContent.metadata
        let pagename = post.replace(".mdx", "")
        let slug = `/work-stuff/${pagename}`
        return {metadata, slug}
    })

    //TODO: any ways not to use Promise?
    return Promise.all(postPromises)
}

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