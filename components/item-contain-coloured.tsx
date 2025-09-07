import Link from "next/link"
const posts = [
    {
        id: 1,
        title: 'The Expansive Canvas',
        href: 'https://expansivecanvas.com',
        description:
            'Presented a Performance with Discursive Element alongside pianist David Vesey',
        date: '27th August, 2025'
    },
    {
        id: 2,
        title: 'Informal Music Afternoon',
        href: 'https://www.themodel.ie/whats-on/',
        description: 'Recital with pianists Carmen Ong Romantic French Music',
        date: '5th October, 2025'
    },
    {
        id: 3,
        title: 'The Magic Fountain by Frederick Delius',
        href: 'https://www.wexfordopera.com/programme/festival-programme/the-magic-fountain',
        description:
            'Performing as part of Wexford Festival Opera Orchestra',
        date: '19, 23, 25 and 31 October, 2025'
    },
]

export default function ContentContainerColoured() {
    return (
        <div className="text-white mt-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h1 className="text-3xl mt-10 mb-5 font-bold text-center mt-10 text-gray-700">Past & Upcoming Events</h1>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 
                        sm:mt-10 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3 gap-4">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="flex max-w-xl flex-col items-start justify-between bg-purple rounded p-10 transition transform duration-200 ease-in-out hover:shadow-lg hover:scale-[1.10]"
                        >
                            <div className="group relative grow">
                                <h3 className="mt-3 text-lg/6 font-semibold">
                                    <Link href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-2 text-xs">{post.date}</p>
                                <p className="mt-5 line-clamp-3 text-sm/6">{post.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}