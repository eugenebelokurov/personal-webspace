export default function PostLayout({children}: {children: React.ReactNode}) {
    return (
        <div
            className="m-auto max-w-2xl px-4 py-8"
        >
            {children}
        </div>
    )
}