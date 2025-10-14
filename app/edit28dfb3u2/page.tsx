"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import MyEditor from "@/components/editor-look"
import EventEditor from "@/components/editEvents"
import ImageDropZone from "@/components/image-uploader"

interface BlogPost {
    _id: string
    title: string
    category: string
    text: string
    author: string
}

export default function EditorPage() {
    const router = useRouter()
    const [ready, setReady] = useState(false)
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    // form state
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [text, setText] = useState("")
    const [message, setMessage] = useState("")
    const [tab, setTab] = useState<"add" | "edit" | "delete" | "event" | "image">("add");
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

    useEffect(() => {
        const token = sessionStorage.getItem("authToken")
        if (!token) {
            router.replace("/login-1-9-O")
        } else {
            setReady(true)
            fetchPosts()
        }
    }, [router])

    useEffect(() => {
        if (tab === "add") {
            setTitle("")
            setCategory("")
            setText("")
            setMessage("")
            setSelectedPost(null)
        } else if (tab === "edit" || tab === "delete" || tab === "event" || tab === "image") {
            setSelectedPost(null)
        }
    }, [tab])


    const fetchPosts = async () => {
        setLoading(true)
        setError("")
        try {
            const res = await fetch("https://martina-api-rryn.vercel.app/blogs")
            if (!res.ok) throw new Error("Failed to fetch posts")
            const data: BlogPost[] = await res.json()
            setPosts(data)
        } catch (err: any) {
            setError(err.message || "Unknown error")
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = () => {
        sessionStorage.removeItem("authToken")
        router.push("/login-1-9-O")
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessage("")

        try {
            const res = await fetch("https://martina-api-rryn.vercel.app/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, category, text, author: "Martina Rosaria O'Connell" }),
            })

            if (res.ok) {
                setMessage("✅ Blog post saved!")
                setTitle("")
                setCategory("")
                setText("")
                fetchPosts() // refresh posts
            } else {
                const data = await res.json()
                setMessage(`❌ Error: ${data.message || "Failed to save post"}`)
            }
        } catch {
            setMessage("❌ Network error, please try again.")
        }
    }

    const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!selectedPost) return
        setMessage("")

        try {
            const res = await fetch(`https://martina-api-rryn.vercel.app/blogs/${selectedPost._id}`, {
                method: "PATCH", // or "PUT" if you want full replacement
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, category, text })
            })

            if (res.ok) {
                setMessage("✅ Blog post updated!")
                setSelectedPost(null)
                setTitle("")
                setCategory("")
                setText("")
                fetchPosts() // refresh list
            } else {
                const data = await res.json()
                setMessage(`❌ Error: ${data.message || "Failed to update post"}`)
            }
        } catch {
            setMessage("❌ Network error, please try again.")
        }
    }


    if (!ready) return null

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-start pt-24 px-4">
            {/* Tabs */}
            <div className="absolute inset-x-0 top-2 z-50 p-4 shadow-md flex justify-center gap-4">
                <button className="px-4 py-2 bg-purple text-white rounded hover:bg-purple-900" onClick={() => setTab("image")}>Image</button>
                <button className="px-4 py-2 bg-purple text-white rounded hover:bg-purple-900" onClick={() => setTab("event")}>Events</button>
                <button className="px-4 py-2 bg-purple text-white rounded hover:bg-purple-900" onClick={() => setTab("add")}>Add</button>
                <button className="px-4 py-2 bg-purple text-white rounded hover:bg-purple-900" onClick={() => setTab("edit")}>Edit</button>
                <button className="px-4 py-2 bg-purple text-white rounded hover:bg-purple-900" onClick={() => setTab("delete")}>Delete</button>
                <button className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-900" onClick={handleLogout}>Logout</button>
            </div>

            {/* {Image tab} */}
            {tab === "image" && (<ImageDropZone />)}

            {/* {Edit event} */}
            {tab === "event" && (
                <div className="p-6 rounded-lg shadow-lg w-full overflow-hidden flex flex-col">
                    <EventEditor />
                </div>
            )}

            {/* Add Tab */}
            {tab === "add" && (
                <div className="p-6 rounded-lg shadow-lg w-full overflow-hidden flex flex-col">
                    <h1 className="text-2xl font-bold text-purple mb-4">✍️ Write a Blog</h1>
                    <h2 className="text-lg text-gray-700 mb-6">
                        Ensure each paragraph uses <span className="font-mono text-purple">"\n"</span> between it.
                    </h2>

                    <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto space-y-4 pr-2">
                        <input
                            type="text"
                            placeholder="Post title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full rounded-md border border-purple/30 px-3 py-2 text-purple focus:outline-none focus:ring-2 focus:ring-purple/50"
                        />

                        <input
                            type="text"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="block w-full rounded-md border border-purple/30 px-3 py-2 text-purple focus:outline-none focus:ring-2 focus:ring-purple/50"
                        />

                        <textarea
                            placeholder="Write your blog post..."
                            rows={15}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="block w-full rounded-md border border-purple/30 px-3 py-2 text-purple resize-none focus:outline-none focus:ring-2 focus:ring-purple/50"
                        />

                        <button
                            type="submit"
                            className="rounded-md bg-purple px-4 py-2 font-semibold text-white hover:bg-purple-900 transition-colors"
                        >
                            Save Post
                        </button>

                    </form>

                    {message && (
                        <p className="mt-4 text-center text-lg text-purple font-medium">{message}</p>
                    )}
                </div>
            )}

            {/* Edit Tab */}
            {tab === "edit" && (
                <div className="p-6 rounded-lg shadow-lg w-full max-w-5xl h-full overflow-hidden flex flex-col">
                    <h1 className="text-2xl font-bold text-purple mb-4">📝 Edit Blog</h1>

                    {/* Scrollable posts list */}
                    <div className="flex-1 overflow-y-auto pr-2">
                        {loading && <p>Loading posts...</p>}
                        {error && <p className="text-red-600">{error}</p>}
                        {!loading && !error && (
                            <ul className="space-y-2">
                                {posts.map((post) => (
                                    <li
                                        key={post._id}
                                        className="border border-purple/30 p-3 rounded-lg flex flex-col gap-2 bg-gray-200"
                                    >
                                        <span className="text-purple font-bold">{post.title}</span>
                                        <p className="text-gray-900">
                                            {post.text.length > 100 ? post.text.slice(0, 100) + "..." : post.text}
                                        </p>
                                        <button
                                            className="self-start px-2 py-1 bg-purple text-white rounded hover:bg-purple-900"
                                            onClick={() => {
                                                setSelectedPost(post);
                                                setTitle(post.title);
                                                setCategory(post.category);
                                                setText(post.text);
                                            }}
                                        >
                                            Edit
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Modal Overlay */}
                    {selectedPost && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                            {/* Modal Card */}
                            <div className="bg-gray-200 rounded-2xl shadow-2xl w-8/9 p-6 h-4/5 relative animate-fadeIn">
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="absolute top-3 right-3 text-gray-500 hover:text-purple"
                                >
                                    ✕
                                </button>

                                <h2 className="text-xl font-bold text-purple mb-4">✏️ Edit Post</h2>

                                <form onSubmit={handleEditSubmit} className="space-y-4">
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="block w-full rounded-md border border-purple/30 px-3 py-2 text-purple"
                                        placeholder="Title"
                                    />
                                    <input
                                        type="text"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="block w-full rounded-md border border-purple/30 px-3 py-2 text-purple"
                                        placeholder="Category"
                                    />
                                    <textarea
                                        rows={10}
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        className="block w-full rounded-md border border-purple/30 px-3 py-2 text-purple resize-none"
                                        placeholder="Write your post..."
                                    />
                                    <div className="flex justify-end gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedPost(null)}
                                            className="rounded-md border border-purple px-4 py-2 text-purple hover:bg-purple/10"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="rounded-md bg-purple px-4 py-2 font-semibold text-white hover:bg-purple-900"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            )}


            {/* Delete Tab */}
            {tab === "delete" && (
                <div className="p-6 rounded-lg shadow-lg w-full max-w-5xl h-full overflow-hidden flex flex-col">
                    <h1 className="text-2xl font-bold text-purple mb-4">🗑️ Delete Blog</h1>

                    {/* Scrollable posts list */}
                    <div className="flex-1 overflow-y-auto pr-2">
                        {loading && <p>Loading posts...</p>}
                        {error && <p className="text-red-600">{error}</p>}
                        {!loading && !error && (
                            <ul className="space-y-2">
                                {posts.map((post) => (
                                    <li
                                        key={post._id}
                                        className="border border-purple/30 p-3 rounded-lg flex flex-col gap-2 bg-gray-200"
                                    >
                                        <span className="text-purple font-bold">{post.title}</span>
                                        <p className="text-gray-900">
                                            {post.text.length > 100 ? post.text.slice(0, 100) + "..." : post.text}
                                        </p>
                                        <button
                                            className="self-start px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                                            onClick={() => setSelectedPost(post)}
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Delete Confirmation Modal */}
                    {selectedPost && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-fadeIn">
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="absolute top-3 right-3 text-gray-500 hover:text-purple"
                                >
                                    ✕
                                </button>

                                <h2 className="text-xl font-bold text-purple mb-4">Confirm Delete</h2>
                                <p className="text-gray-700 mb-6">
                                    Are you sure you want to permanently delete{" "}
                                    <span className="font-semibold text-purple">
                                        "{selectedPost.title}"
                                    </span>
                                    ?
                                </p>

                                <div className="flex justify-end gap-3">
                                    <button
                                        onClick={() => setSelectedPost(null)}
                                        className="rounded-md border border-purple px-4 py-2 text-purple hover:bg-purple/10"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={async () => {
                                            try {
                                                const res = await fetch(
                                                    `https://martina-api-rryn.vercel.app/blogs/${selectedPost._id}`,
                                                    { method: "DELETE" }
                                                );
                                                if (!res.ok) throw new Error("Failed to delete post");
                                                fetchPosts(); // Refresh posts
                                                setSelectedPost(null);
                                            } catch (err) {
                                                console.error(err);
                                                alert("Failed to delete post. Please try again.");
                                            }
                                        }}
                                        className="rounded-md bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
