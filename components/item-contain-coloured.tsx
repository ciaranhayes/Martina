import Link from "next/link"
const posts = [
    {
        id: 1,
        title: 'Content',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Content',
        href: '#',
        description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        category: { title: 'Sales', href: '#' },
        author: {
            name: 'Lindsay Walton',
            role: 'Front-end Developer',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Content',
        href: '#',
        description:
            'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        category: { title: 'Business', href: '#' },
        author: {
            name: 'Tom Cook',
            role: 'Director of Product',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        title: 'Content',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    }
]

export default function ContentContainerColoured() {
    return (
        <div className="text-white mt-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h1 className="text-3xl mt-10 font-bold text-center mt-10 text-gray-700">Past & Upcoming Events</h1>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 
                        sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-4 gap-4">
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
                                <p className="mt-5 line-clamp-3 text-sm/6">{post.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}