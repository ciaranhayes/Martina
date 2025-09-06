import Link from "next/link"

type Post = {
    id: number
    title: string
    href: string
    description: string
}

export default function ContentContainer({ posts }: { posts: Post[] }) {
    return (
        <div className="text-[#292842]">
            <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
                <div className="mx-auto mt-7 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-7 sm:pt-7 lg:mx-0 lg:max-w-none lg:grid-cols-4 gap-4">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between border-l border-purple p-5">
                            <div className="group relative grow">
                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                    <Link href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm/9">{post.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}