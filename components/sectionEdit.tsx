"use client";

import { useState, useEffect } from "react";

interface Section {
    _id: string;
    title: string;
    text?: string;
    imageSrc: string[]; // always an array now
    type: string; // "section 1" or "section 2"
}

export default function SectionsEditor() {
    const [sections, setSections] = useState<Section[]>([]);
    const [selected, setSelected] = useState<Section | null>(null);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [imageSrcs, setImageSrcs] = useState<string[]>([""]);
    const [type, setType] = useState("section 1");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Fetch sections
    useEffect(() => {
        async function fetchSections() {
            setLoading(true);
            try {
                const res = await fetch("https://martina-api-rryn.vercel.app/section");
                if (!res.ok) throw new Error("Failed to fetch sections");
                const data = await res.json();
                setSections(data);
            } catch (err) {
                setError(`${err}`);
            } finally {
                setLoading(false);
            }
        }
        fetchSections();
    }, []);

    // Handle Add/Update
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!title || imageSrcs.length === 0 || (type === "section 1" && !text)) {
            alert("All required fields are filled in.");
            return;
        }

        try {
            const payload = { title, text: type === "section 1" ? text : "", imageSrc: imageSrcs, type };
            const method = selected ? "PUT" : "POST";
            const endpoint = selected
                ? `https://martina-api-rryn.vercel.app/section/${selected._id}`
                : "https://martina-api-rryn.vercel.app/section";

            const res = await fetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Failed to save section");

            // Refresh list
            const updatedRes = await fetch("https://martina-api-rryn.vercel.app/section");
            const updatedData = await updatedRes.json();
            setSections(updatedData);

            // Reset form
            resetForm();
        } catch (err) {
            console.error(err);
            alert("Error saving section");
        }
    }

    function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this section?")) return;
        fetch(`https://martina-api-rryn.vercel.app/section/${id}`, { method: "DELETE" })
            .then(res => {
                if (!res.ok) throw new Error("Failed to delete section");
                setSections(sections.filter(s => s._id !== id));
            })
            .catch(console.error);
    }

    function handleEdit(sec: Section) {
        setSelected(sec);
        setTitle(sec.title);
        setText(sec.text || "");
        setImageSrcs(sec.imageSrc.length ? sec.imageSrc : [""]);
        setType(sec.type);
    }

    function resetForm() {
        setSelected(null);
        setTitle("");
        setText("");
        setImageSrcs([""]);
        setType("section 1");
    }

    // Handle multiple image inputs for section 2
    function handleImageChange(index: number, value: string) {
        const newImages = [...imageSrcs];
        newImages[index] = value;
        setImageSrcs(newImages);
    }

    function addImageInput() {
        setImageSrcs([...imageSrcs, ""]);
    }

    function removeImageInput(index: number) {
        setImageSrcs(imageSrcs.filter((_, i) => i !== index));
    }

    return (
        <div className="p-6 rounded-lg shadow-lg w-full max-w-5xl h-full overflow-hidden flex flex-col">
            <h1 className="text-2xl font-bold text-purple mb-4">📝 Manage Sections</h1>

            {/* Sections List */}
            <div className="flex-1 overflow-y-auto pr-2">
                {loading && <p>Loading sections...</p>}
                {error && <p className="text-red-600">{error}</p>}
                {!loading && !error && sections.length === 0 && (
                    <p className="text-gray-500 text-center mt-4">No sections yet.</p>
                )}
                {!loading && !error && sections.length > 0 && (
                    <ul className="space-y-3">
                        {sections.map(sec => (
                            <li key={sec._id} className="border border-purple/30 p-3 rounded-lg bg-gray-100 flex flex-col gap-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-purple font-bold">{sec.title}</span>{" "}
                                        <span className="ml-2 px-2 py-0.5 rounded text-xs bg-blue-200 text-blue-800">
                                            {sec.type}
                                        </span>
                                        {sec.type === "section 1" && (
                                            <p className="text-gray-800 text-sm mt-1">{sec.text}</p>
                                        )}
                                    </div>
                                    {sec.imageSrc.length > 0 && (
                                        <div className="flex gap-2">
                                            {sec.imageSrc.map((src, i) => (
                                                <img key={i} src={src} alt={sec.title} className="w-24 h-16 object-cover rounded-md border" />
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="flex gap-2 mt-2">
                                    <button
                                        className="px-2 py-1 bg-purple text-white rounded hover:bg-purple-900"
                                        onClick={() => handleEdit(sec)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-800"
                                        onClick={() => handleDelete(sec._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Add/Edit Form */}
            <form onSubmit={handleSubmit} className="mt-6 border-t border-gray-300 pt-4 flex flex-col gap-3 text-gray-900 overflow-">
                <h2 className="text-lg font-semibold text-gray-800">
                    {selected ? "Edit Section" : "Add New Section"}
                </h2>

                <input
                    type="text"
                    placeholder="Title"
                    className="border p-2 rounded w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                {/* Section Type Selector */}
                <label className="flex items-center gap-2 mt-2">
                    <span className="text-sm font-medium">Section Type:</span>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="border p-2 rounded"
                    >
                        <option value="section 1">Text + Image</option>
                        <option value="section 2">Image Collection</option>
                    </select>
                </label>

                {/* Text only for Section 1 */}
                {type === "section 1" && (
                    <textarea
                        placeholder="Text"
                        className="border p-2 rounded w-full"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                )}

                {/* Image Inputs */}
                <div className="flex flex-col gap-2">
                    {imageSrcs.map((src, index) => (
                        <div key={index} className="flex gap-2 items-center">
                            <input
                                type="text"
                                placeholder={`Image URL ${index + 1}`}
                                className="border p-2 rounded w-full"
                                value={src}
                                onChange={(e) => handleImageChange(index, e.target.value)}
                            />
                            {imageSrcs.length > 1 && (
                                <button type="button" className="px-2 py-1 bg-red-600 text-white rounded" onClick={() => removeImageInput(index)}>
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" className="px-3 py-1 bg-green-600 text-white rounded mt-2 w-max" onClick={addImageInput}>
                        Add Another Image
                    </button>
                </div>

                <div className="flex gap-2 mt-2">
                    <button type="submit" className="px-3 py-1 bg-purple text-white rounded hover:bg-purple-900">
                        {selected ? "Update" : "Add"}
                    </button>
                    {selected && (
                        <button
                            type="button"
                            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-700"
                            onClick={resetForm}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
