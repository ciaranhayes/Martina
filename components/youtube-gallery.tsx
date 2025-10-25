"use client"
import React, { useEffect, useState } from "react";

interface Youtube {
    _id: string;
    category: string;
    description: string;
    url: string;
}

export default function YouTubeGallery() {
    const [videos, setVideos] = useState<Youtube[]>([]);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const res = await fetch("https://martina-api-rryn.vercel.app/youtube");
                if (!res.ok) throw new Error("Failed to fetch videos");
                const data: Youtube[] = await res.json();

                // Only include category === "performance"
                const performanceVideos = data.filter(
                    (video) => video.category.toLowerCase() === "performance"
                );

                setVideos(performanceVideos);
            } catch (err) {
                console.error(err);
            }
        }
        fetchVideos();
    }, []);

    // Convert URLs into embeddable format
    const getEmbedUrl = (url: string) => {
        if (url.includes("watch?v=")) {
            return url.replace("watch?v=", "embed/");
        }
        if (url.includes("youtu.be/")) {
            return url.replace("youtu.be/", "www.youtube.com/embed/");
        }
        return url;
    };

    return (
        <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((video, index) => {
                    const embedUrl = getEmbedUrl(video.url);

                    return (
                        <div
                            key={video._id || index}
                            className="flex flex-col items-center w-full max-w-md mx-auto"
                        >
                            <div className="w-full aspect-video rounded-xl shadow-lg overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src={embedUrl}
                                    title={`YouTube video ${index + 1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
