export default async function Page({ params }: { params: Promise<{ slug: string}> }) {
    const { slug } = await params
    const {default: Post} = await import(`../../work-stuff/posts/${slug}.mdx`)

    return <Post />
}

//TODO: can I automatically generate the list of slugs?
export function generateStaticParams() {
    return [{slug: "post-one"}, {slug: "post-two"}]
}

export const dynamicParams = false