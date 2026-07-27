import fs from "fs";
import path from "path";

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir)
}

//TODO: return ordered from newest to oldest
export async function getWorkStuff() {

    //TODO: get dir as a parameter
    const dir = "app/work-stuff/posts"

    const listOfWorkStuff = getMDXFiles(dir).filter((file) => path.extname(file) === ".mdx")

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