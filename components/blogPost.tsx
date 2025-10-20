'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

interface Post {
    _id: string
    title: string
    author: string
    category: string
    text: string
    date: string
}

export default function BlogDetail() {
    const params = useParams()
    const [post, setPost] = useState<Post | null>(null)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`https://martina-api-rryn.vercel.app/blogs/${params.id}`)
                if (!res.ok) throw new Error('Failed to fetch post')
                const data: Post = await res.json()
                setPost(data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchPost()
    }, [params.id])

    if (!post) return <p className="p-6">Loading...</p>

    return (
        <div className="overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-900 pb-5">{post.title}</h1>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-gray-700 text-sm mb-4">
                    <span>By <strong>{post.author}</strong></span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>

                <span className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                    {post.category}
                </span>

                <div className="prose max-w-none mt-4 text-gray-900">
                    {post.text
                        .replace(/\\n/g, '\n')
                        .split('\n')
                        .filter(line => line.trim() !== '')
                        .map((paragraph, index) => (
                            <p key={index} className="p-1.5">
                                {paragraph.trim()}
                            </p>
                        ))}
                </div>
            </div>
        </div>
    )
}
