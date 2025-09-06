import Image from "next/image"

type Post = {
    title: string
    description: string
    href: string
}

export default function WestWicklow({ post }: { post: Post }) {
    return (
        <div className="relative isolate overflow-hidden px-6 pt-10 pb-20 lg:overflow-visible lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-y-16 gap-x-12 lg:grid-cols-4 lg:items-start">
                    <div className="lg:col-span-3">
                        <div className="pl-10 border-l border-purple">
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900">
                                {post.title}
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                {post.description}
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-1 flex justify-center lg:top-10">
                        <Image
                            src={post.href}
                            width={400}
                            height={400}
                            alt="Logo for West Wicklow Chamber Festival"
                            className="max-w-[200px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
