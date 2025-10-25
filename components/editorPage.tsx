"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function EditorPage() {
    const router = useRouter()
    const [ready, setReady] = useState(false)

    // form state
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [text, setText] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        const token = sessionStorage.getItem("authToken")
        if (!token) {
            router.replace("/login-1-9-O") // 🚪 redirect if not logged in
        } else {
            setReady(true)
        }
    }, [router])

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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    category,
                    text,
                    author: "Martina Rosaria O'Connell" // hardcoded since it's always you
                }),
            })

            if (res.ok) {
                setMessage("✅ Blog post saved!")
                setTitle("")
                setCategory("")
                setText("")
            } else {
                const data = await res.json()
                setMessage(`❌ Error: ${data.message || "Failed to save post"}`)
            }
        } catch (err) {
            setMessage(`❌ Network error, please try again. ${err}`)
        }
    }

    if (!ready) return null

    return (
        <div className="p-6 h-full w-full">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-purple">✍️ Blog Editor</h1>
                <button
                    onClick={handleLogout}
                    className="rounded-md bg-red-600 px-3 py-1.5 text-white hover:bg-red-700"
                >
                    Logout
                </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                    type="text"
                    placeholder="Post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full rounded-md border border-purple/30 px-3 py-2 text-purple"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="block w-full rounded-md border border-purple/30 px-3 py-2 text-purple"
                />
                <textarea
                    placeholder="Write your blog post..."
                    rows={6}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="block w-full rounded-md border border-purple/30 px-3 py-2 text-purple"
                ></textarea>
                <button
                    type="submit"
                    className="rounded-md bg-purple px-4 py-2 font-semibold text-white hover:bg-purple-900"
                >
                    Save Post
                </button>
            </form>

            {message && (
                <p className="mt-4 text-center text-sm text-purple">{message}</p>
            )}
        </div>
    )
}
