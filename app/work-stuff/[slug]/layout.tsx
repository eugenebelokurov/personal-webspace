import Link from "next/link";

export default function PostLayout({children}: {children: React.ReactNode}) {
    return (
        <div
            className="mx-auto max-w-2xl my-10 px-2"
        >
            <div className="flex flex-row gap-1">
                <Link href="/">Home</Link>
                <p>/</p>
                <Link href="/work-stuff">All cases</Link>
                <p>/</p>
                <p className="text-[#1AA809]">This case</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
