"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

interface UploadedImage {
    _id: string
    fileUrl: string
    fileName: string
    uploadedAt: string
}

export default function ViewUploadedImages() {
    const [images, setImages] = useState<UploadedImage[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [copiedId, setCopiedId] = useState<string | null>(null)

    const fetchImages = async () => {
        try {
            const res = await fetch("https://martina-api-rryn.vercel.app/uploads", {
                cache: "no-store",
            })
            if (!res.ok) throw new Error("Failed to fetch images")
            const data = await res.json()
            setImages(data)
        } catch (err) {
            setError(`An error occurred ${err}`)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchImages()

        const interval = setInterval(fetchImages, 10000)
        return () => clearInterval(interval)
    }, [])

    const handleCopy = async (fileUrl: string, id: string) => {
        try {
            await navigator.clipboard.writeText(fileUrl)
            setCopiedId(id)
            setTimeout(() => setCopiedId(null), 2000)
        } catch (err) {
            console.error("Failed to copy file URL", err)
        }
    }

    if (loading) {
        return <p className="text-center text-purple mt-10">Loading images...</p>
    }

    if (error) {
        return <p className="text-center text-red-500 mt-10">{error}</p>
    }

    if (images.length === 0) {
        return <p className="text-center text-gray-500 mt-10">No images uploaded yet.</p>
    }

    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-purple mb-6">Uploaded Images - Click to copy URL!</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((img) => (
                        <div
                            key={img._id}
                            onClick={() => handleCopy(img.fileUrl, img._id)}
                            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer relative"
                        >
                            <div className="relative w-full h-64">
                                <Image
                                    src={img.fileUrl}
                                    alt={img.fileName}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-gray-600 truncate">{img.fileName}</p>
                                <p className="text-xs text-gray-400">
                                    {new Date(img.uploadedAt).toLocaleString()}
                                </p>
                            </div>

                            {copiedId === img._id && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium text-sm">
                                    ✅ Copied URL!
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
