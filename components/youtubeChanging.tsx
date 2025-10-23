"use client";

import { useEffect, useState } from "react";

interface YoutubeLink {
    _id: string;
    category: string;
    url: string;
    description: string;
}

export default function EditYoutubeLinks() {
    const [links, setLinks] = useState<YoutubeLink[]>([]);
    const [selectedLink, setSelectedLink] = useState<YoutubeLink | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");

    // 🧭 Fetch all YouTube links on mount
    useEffect(() => {
        async function fetchLinks() {
            try {
                const res = await fetch("https://martina-api-rryn.vercel.app/youtube");
                if (!res.ok) throw new Error("Failed to fetch YouTube links");
                const data = await res.json();
                setLinks(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchLinks();
    }, []);

    // ✏️ Save updated link
    const handleSave = async () => {
        if (!selectedLink) return;

        try {
            const res = await fetch(
                `https://martina-api-rryn.vercel.app/youtube/${selectedLink._id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ url, description }),
                }
            );
            if (!res.ok) throw new Error("Failed to update link");

            const updated = await res.json();

            // update local state
            setLinks((prev) =>
                prev.map((l) => (l._id === updated._id ? updated : l))
            );
            setSelectedLink(null);
        } catch (err: any) {
            setError(err.message);
        }
    };

    // 🧩 Group by category
    const groupedLinks = links.reduce((acc: Record<string, YoutubeLink[]>, link) => {
        if (!acc[link.category]) acc[link.category] = [];
        acc[link.category].push(link);
        return acc;
    }, {});

    return (
        <div className="p-6 rounded-lg shadow-lg w-full max-w-5xl h-full overflow-hidden flex flex-col">
            <h1 className="text-2xl font-bold text-purple mb-4">🎥 Edit YouTube Links</h1>

            {/* Error/Loading State */}
            {loading && <p>Loading YouTube links...</p>}
            {error && <p className="text-red-600">{error}</p>}

            {/* 🧩 List of Categories */}
            {!selectedLink && !loading && (
                <div className="flex-1 overflow-y-auto pr-2 space-y-6">
                    {Object.entries(groupedLinks).map(([category, items]) => (
                        <div key={category}>
                            <h2 className="text-xl font-semibold text-purple mb-2">
                                {category.charAt(0).toUpperCase() + category.slice(1)} Page
                            </h2>

                            <ul className="space-y-2">
                                {items.map((link) => (
                                    <li
                                        key={link._id}
                                        className="border border-purple/30 p-3 rounded-lg bg-gray-900 flex flex-col gap-2"
                                    >
                                        <span className="text-purple font-semibold">
                                            {link.description}
                                        </span>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-900 hover:underline break-all"
                                        >
                                            {link.url}
                                        </a>

                                        <button
                                            onClick={() => {
                                                setSelectedLink(link);
                                                setUrl(link.url);
                                                setDescription(link.description);
                                            }}
                                            className="self-start px-2 py-1 bg-purple text-white rounded hover:bg-purple-900 transition"
                                        >
                                            Edit
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {/* 🧾 Edit Form */}
            {selectedLink && (
                <div className="flex flex-col space-y-4">
                    <h2 className="text-xl font-semibold text-purple">
                        Editing Video ({selectedLink.category})
                    </h2>

                    <label className="flex flex-col">
                        <span className="text-gray-700 text-sm font-medium mb-1">URL</span>
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="p-3 text-gray-900 border border-gray-900 rounded-lg p-2 focus:ring-2 focus:ring-purple focus:outline-none"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-gray-900 text-sm font-medium mb-1">
                            Description
                        </span>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="p-3 text-gray-900 border border-gray-900 rounded-lg p-2 focus:ring-2 focus:ring-purple focus:outline-none"
                        />
                    </label>

                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-purple text-white rounded-lg hover:bg-purple-900 transition"
                        >
                            Save Changes
                        </button>
                        <button
                            onClick={() => setSelectedLink(null)}
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
