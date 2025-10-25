"use client";

import { useState, useEffect } from "react";

interface Resource {
    _id: string;
    name: string;
    url: string;
    imageSrc: string;
    description: string;
}

export default function FreeResourcesEditor() {
    const [resources, setResources] = useState<Resource[]>([]);
    const [selected, setSelected] = useState<Resource | null>(null);
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // ✅ Fetch all resources
    useEffect(() => {
        async function fetchResources() {
            setLoading(true);
            try {
                const res = await fetch("https://martina-api-rryn.vercel.app/resource");
                if (!res.ok) throw new Error("Failed to fetch resources");
                const data = await res.json();
                setResources(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchResources();
    }, []);

    // ✅ Handle add or update
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!name || !url || !imageSrc || !description) {
            alert("All fields are required.");
            return;
        }

        try {
            const method = selected ? "PUT" : "POST";
            const endpoint = selected
                ? `https://martina-api-rryn.vercel.app/resource/${selected._id}`
                : "https://martina-api-rryn.vercel.app/resource";

            const res = await fetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, url, imageSrc, description }),
            });

            if (!res.ok) throw new Error("Failed to save resource");

            // Refresh list
            const updatedRes = await fetch("https://martina-api-rryn.vercel.app/resource");
            const updatedData = await updatedRes.json();
            setResources(updatedData);

            // Reset form
            setSelected(null);
            setName("");
            setUrl("");
            setImageSrc("");
            setDescription("");
        } catch (err) {
            console.error(err);
            alert("Error saving resource");
        }
    }

    // ✅ Handle delete
    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this resource?")) return;
        try {
            const res = await fetch(`https://martina-api-rryn.vercel.app/resource/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Failed to delete resource");
            setResources(resources.filter((r) => r._id !== id));
        } catch (err) {
            console.error(err);
        }
    }

    // ✅ When editing
    function handleEdit(resource: Resource) {
        setSelected(resource);
        setName(resource.name);
        setUrl(resource.url);
        setImageSrc(resource.imageSrc);
        setDescription(resource.description);
    }

    return (
        <div className="p-6 rounded-lg shadow-lg w-full max-w-5xl h-full overflow-hidden flex flex-col">
            <h1 className="text-2xl font-bold text-purple mb-4">🎵 Manage Free Resources</h1>

            {/* Scrollable list of resources */}
            <div className="flex-1 overflow-y-auto pr-2">
                {loading && <p>Loading resources...</p>}
                {error && <p className="text-red-600">{error}</p>}
                {!loading && !error && (
                    <ul className="space-y-3">
                        {resources.map((res) => (
                            <li
                                key={res._id}
                                className="border border-purple/30 p-3 rounded-lg bg-gray-100 flex flex-col gap-2"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-purple font-bold">{res.name}</span>
                                        <p className="text-gray-800 text-sm mt-1">{res.description}</p>
                                        <a
                                            href={res.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline text-sm"
                                        >
                                            View Resource
                                        </a>
                                    </div>
                                    <img
                                        src={res.imageSrc}
                                        alt={res.name}
                                        className="w-24 h-16 object-cover rounded-md border"
                                    />
                                </div>
                                <div className="flex gap-2 mt-2">
                                    <button
                                        className="px-2 py-1 bg-purple text-white rounded hover:bg-purple-900"
                                        onClick={() => handleEdit(res)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-800"
                                        onClick={() => handleDelete(res._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Add/Edit form */}
            <form
                onSubmit={handleSubmit}
                className="mt-6 border-t border-gray-300 pt-4 flex flex-col gap-3"
            >
                <h2 className="text-lg font-semibold text-gray-800">
                    {selected ? "Edit Resource" : "Add New Resource"}
                </h2>

                <input
                    type="text"
                    placeholder="Name"
                    className="border p-2 rounded w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="URL (e.g. use google docs viewer mode shareable link)"
                    className="border p-2 rounded w-full"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Image Source (use from uploadthings)"
                    className="border p-2 rounded w-full"
                    value={imageSrc}
                    onChange={(e) => setImageSrc(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    className="border p-2 rounded w-full"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <div className="flex gap-2">
                    <button
                        type="submit"
                        className="px-3 py-1 bg-purple text-white rounded hover:bg-purple-900"
                    >
                        {selected ? "Update" : "Add"}
                    </button>
                    {selected && (
                        <button
                            type="button"
                            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-700"
                            onClick={() => {
                                setSelected(null);
                                setName("");
                                setUrl("");
                                setImageSrc("");
                                setDescription("");
                            }}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
