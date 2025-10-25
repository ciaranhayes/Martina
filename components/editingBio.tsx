"use client";

import { useEffect, useState } from "react";

interface Bio {
    _id: string;
    title: string;
    category: string;
    text: string;
}

export default function EditBios() {
    const [bios, setBios] = useState<Bio[]>([]);
    const [selectedBio, setSelectedBio] = useState<Bio | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");

    // Fetch all bios on mount
    useEffect(() => {
        async function fetchBios() {
            try {
                const res = await fetch("https://martina-api-rryn.vercel.app/bios");
                if (!res.ok) throw new Error("Failed to fetch bios");
                const data = await res.json();
                setBios(data);
            } catch (err) {
                setError(`${err}`);
            } finally {
                setLoading(false);
            }
        }
        fetchBios();
    }, []);

    // Handle form submission
    const handleSave = async () => {
        if (!selectedBio) return;

        try {
            const res = await fetch(
                `https://martina-api-rryn.vercel.app/bios/${selectedBio._id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ title, category, text }),
                }
            );
            if (!res.ok) throw new Error("Failed to update bio");

            const updated = await res.json();

            // update list locally
            setBios((prev) =>
                prev.map((b) => (b._id === updated._id ? updated : b))
            );
            setSelectedBio(null);
        } catch (err) {
            setError(`${err}`);
        }
    };

    return (
        <div className="p-6 rounded-lg shadow-lg w-full max-w-5xl h-full overflow-hidden flex flex-col">
            <h1 className="text-2xl font-bold text-purple mb-4">📝 Edit Bios</h1>

            {/* Scrollable list */}
            {!selectedBio && (
                <div className="flex-1 overflow-y-auto pr-2">
                    {loading && <p>Loading bios...</p>}
                    {error && <p className="text-red-600">{error}</p>}
                    {!loading && !error && (
                        <ul className="space-y-2">
                            {bios.map((bio) => (
                                <li
                                    key={bio._id}
                                    className="border border-purple/30 p-3 rounded-lg flex flex-col gap-2 bg-gray-200"
                                >
                                    <span className="text-purple font-bold">{bio.title}</span>
                                    <p className="text-gray-900">
                                        {bio.text.length > 100
                                            ? bio.text.slice(0, 100) + "..."
                                            : bio.text}
                                    </p>
                                    <button
                                        className="self-start px-2 py-1 bg-purple text-white rounded hover:bg-purple-900 transition"
                                        onClick={() => {
                                            setSelectedBio(bio);
                                            setTitle(bio.title);
                                            setCategory(bio.category);
                                            setText(bio.text);
                                        }}
                                    >
                                        Edit
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {/* Edit form */}
            {selectedBio && (
                <div className="flex flex-col space-y-4 text-gray-900">
                    <h2 className="text-xl font-semibold text-purple">
                        Editing: {selectedBio.title}
                    </h2>

                    <label className="flex flex-col">
                        <span className="text-gray-700 text-sm font-medium mb-1">
                            Title
                        </span>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple focus:outline-none"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-gray-700 text-sm font-medium mb-1">
                            Category
                        </span>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple focus:outline-none"
                        />
                    </label>

                    <label className="flex flex-col flex-1">
                        <span className="text-gray-700 text-sm font-medium mb-1">
                            Text
                        </span>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            rows={10}
                            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple focus:outline-none resize-none"
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
                            onClick={() => setSelectedBio(null)}
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
