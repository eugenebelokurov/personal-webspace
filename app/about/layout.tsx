import Link from "next/link"

export default function MdxLayout({ children }: { children: React.ReactNode}) {
    return (
        <div
            className="mx-auto my-10 max-w-2xl flex flex-col gap-4 px-2"
        >
            <div className="flex flex-row gap-1">
                <Link href="/">Home</Link>
                <p>/</p>
                <p className="text-[#1AA809]">About</p>
            </div>
            <div>{children}</div>
        </div>
    )
}