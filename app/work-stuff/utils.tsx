import fs from "fs";
import path from "path";

function getMDXFiles(dir: string) {
    const files = fs.readdirSync(dir)
        .filter((file) => path.extname(file) === ".mdx")

    return files
}

export async function getWorkStuff(numberOfPosts?: number) {

    //TODO: get dir as a parameter
    const dir = "app/work-stuff/posts"

    const listOfWorkStuff = getMDXFiles(dir)
    console.log(listOfWorkStuff)

    const postPromises = listOfWorkStuff.map(async(post) => {
        const postContent = await import(`./posts/${post}`)
        const metadata = postContent.metadata
        const pagename = post.replace(".mdx", "")
        const slug = `/work-stuff/${pagename}`
        return {metadata, slug}
    })

    //TODO: any ways not to use Promise?
    const postsList = await Promise.all(postPromises)

    const sortedPostsList = postsList.sort((a, b) => {
        return new Date(b.metadata.dateCreated).getTime() - new Date(a.metadata.dateCreated).getTime()
    })

    if(numberOfPosts) {
        return sortedPostsList.slice(0, numberOfPosts)
    }

    return sortedPostsList
}