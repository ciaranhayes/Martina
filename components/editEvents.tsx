"use client"
import { useEffect, useState } from "react"

interface EventPost {
    _id: string
    title: string
    description: string
    date: string
    link: string
}

export default function EventEditor() {
    const [loading, setLoading] = useState(false)
    const [events, setEvents] = useState<EventPost[]>([])
    const [error, setError] = useState("")
    const [selectedEvent, setSelectedEvent] = useState<EventPost | null>(null)
    const [adding, setAdding] = useState(false)
    const [message, setMessage] = useState("")

    // form state
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [link, setLink] = useState("")

    const fetchEvents = async () => {
        setLoading(true)
        setError("")
        try {
            const res = await fetch("https://martina-api-rryn.vercel.app/events")
            if (!res.ok) throw new Error("Failed to fetch events")
            const data: EventPost[] = await res.json()
            setEvents(data)
        } catch (err) {
            setError(`Unknown error ${err}`)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    const handleAdd = async () => {
        setMessage("")
        try {
            const res = await fetch("https://martina-api-rryn.vercel.app/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description, date, link })
            })
            if (!res.ok) throw new Error("Failed to add event")
            fetchEvents()
            setTitle(""); setDescription(""); setDate(""); setLink("")
            setAdding(false)
            setMessage("✅ Event added!")
        } catch (err) {
            setMessage(`Unknown error ${err}`)
        }
    }

    const handleEdit = async () => {
        if (!selectedEvent) return
        setMessage("")
        try {
            const res = await fetch(`https://martina-api-rryn.vercel.app/events/${selectedEvent._id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description, date, link })
            })
            if (!res.ok) throw new Error("Failed to update event")
            fetchEvents()
            setSelectedEvent(null)
            setTitle(""); setDescription(""); setDate(""); setLink("")
            setMessage("✅ Event updated!")
        } catch (err) {
            setMessage(`Unknown error ${err}`)
        }
    }

    const handleDelete = async () => {
        if (!selectedEvent) return
        setMessage("")
        try {
            const res = await fetch(`https://martina-api-rryn.vercel.app/events/${selectedEvent._id}`, { method: "DELETE" })
            if (!res.ok) throw new Error("Failed to delete event")
            fetchEvents()
            setSelectedEvent(null)
            setMessage("✅ Event deleted!")
        } catch (err) {
            setMessage(`Unknown error ${err}`)
        }
    }

    if (loading) return <p>Loading events...</p>
    if (error) return <p className="text-red-500">{error}</p>

    return (
        <>
            <h1 className="text-3xl mt-10 mb-5 font-bold text-center text-gray-700">Events you have posted</h1>

            {/* Add Button */}
            <div className="flex flex-wrap gap-4 justify-center mt-6">
                <button
                    className="px-6 py-3 bg-purple text-white font-semibold rounded-lg shadow-md transition transform duration-200 hover:bg-purple-900 max-w-content"
                    onClick={() => {
                        setAdding(true)
                        setSelectedEvent(null)
                        setTitle(""); setDescription(""); setDate(""); setLink("")
                    }}
                >
                    Add Event
                </button>
            </div>

            {/* Message */}
            {message && <p className="mt-4 text-center text-purple font-medium">{message}</p>}

            {/* Event Grid */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 
                        sm:mt-10 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3 gap-4 text-white">
                {events.map((post) => (
                    <article
                        key={post._id}
                        className="flex max-w-xl flex-col items-start justify-between bg-purple rounded p-10 transition transform duration-200 ease-in-out hover:shadow-lg hover:scale-[1.10]"
                        onClick={() => {
                            setSelectedEvent(post)
                            setAdding(false)
                            setTitle(post.title)
                            setDescription(post.description)
                            setDate(post.date)
                            setLink(post.link)
                        }}
                    >
                        <div className="group relative grow">
                            <h3 className="mt-3 text-lg/6 font-semibold">
                                    <span className="absolute inset-0" />
                                    {post.title}
                            </h3>
                            <p className="mt-2 text-xs">Link Used: {post.link}</p>
                            <p className="mt-2 text-xs">{post.date}</p>
                            <p className="mt-5 line-clamp-3 text-sm/6">{post.description}</p>
                        </div>
                    </article>
                ))}
            </div>

            {/* Modal for Add/Edit/Delete */}
            {(adding || selectedEvent !== null) && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="bg-gray-200 rounded-2xl shadow-2xl w-8/9 p-6 relative animate-fadeIn">
                        <button
                            onClick={() => { setSelectedEvent(null); setAdding(false) }}
                            className="absolute top-3 right-3 text-gray-500 hover:text-purple"
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-bold text-purple mb-4">
                            {adding ? "➕ Add Event" : "✏️ Edit Event"}
                        </h2>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="block w-full rounded-md border border-purple/30 px-3 py-2 text-purple"
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="block w-full rounded-md border border-purple/30 px-3 py-2 text-purple"
                            />
                            <input
                                type="text"
                                placeholder="Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="block w-full rounded-md border border-purple/30 px-3 py-2 text-purple"
                            />
                            <input
                                type="text"
                                placeholder="Link"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                className="block w-full rounded-md border border-purple/30 px-3 py-2 text-purple"
                            />

                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => { setSelectedEvent(null); setAdding(false) }}
                                    className="rounded-md border border-purple px-4 py-2 text-purple hover:bg-purple/10"
                                >
                                    Cancel
                                </button>

                                {adding ? (
                                    <button
                                        type="button"
                                        onClick={handleAdd}
                                        className="rounded-md bg-purple px-4 py-2 font-semibold text-white hover:bg-purple-900"
                                    >
                                        Add Event
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            onClick={handleEdit}
                                            className="rounded-md bg-purple px-4 py-2 font-semibold text-white hover:bg-purple-900"
                                        >
                                            Save Changes
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleDelete}
                                            className="rounded-md bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
