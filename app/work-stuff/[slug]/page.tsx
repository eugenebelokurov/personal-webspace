import fs from "fs";
import path from "path";

export default async function Page({ params }: { params: Promise<{ slug: string}> }) {
    const { slug } = await params

    console.log("slug:", slug)

    const {default: Post} = await import(`../../work-stuff/posts/${slug}.mdx`)

    return <Post />
}

export function generateStaticParams() {
    const posts = fs.readdirSync("app/work-stuff/posts")
    .filter((file) => path.extname(file) === ".mdx")

    const postsSlugs = posts.map((post) => post.replace(".mdx",""))

    return postsSlugs.map((slug) => ({slug}))
}

export const dynamicParams = false