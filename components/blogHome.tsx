'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Post {
    _id: string
    title: string
    author: string
    category: string
    text: string
    date: string
    __v: number
}

export default function BlogHome() {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('https://martina-api-rryn.vercel.app/blogs')
                if (!res.ok) throw new Error('Failed to fetch posts')
                const data: Post[] = await res.json()
                setPosts(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchPosts()
    }, [])

    return (
        <div className="py-35 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                        Martina&apos;s Blog
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Personal writings and reflections</p>
                </div>

                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-purple pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <Link key={post._id} href={`/blog/${post._id}`}>
                                <article
                                    key={post._id}
                                    className="flex max-w-xl flex-col items-start justify-between border-l border-purple p-5"
                                >
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.date} className="text-gray-500">
                                            {new Date(post.date).toLocaleDateString()}
                                        </time>
                                        <div
                                            className="relative z-10 rounded-full bg-purple px-3 py-1.5 font-medium text-white hover:bg-purple-900"
                                        >
                                            {post.category}
                                        </div>
                                    </div>

                                    <div className="group relative grow">
                                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                            {post.title}
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.text}</p>
                                    </div>

                                    <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                                        <div className="size-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                                            {post.author[0]}
                                        </div>
                                        <div className="text-sm/6">
                                            <p className="font-semibold text-gray-900">{post.author}</p>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-500">Loading posts...</p>
                    )}
                </div>
            </div>
        </div>
    )
}
