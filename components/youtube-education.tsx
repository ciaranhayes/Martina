"use client"
import { useState, useEffect } from "react";

interface Youtube {
    _id: string;
    category: string;
    description: string;
    url: string;
}

export default function YouTubeEducation() {
    const [link, setLink] = useState<Youtube | null>(null);

    useEffect(() => {
        async function fetchLinks() {
            try {
                const res = await fetch("https://martina-api-rryn.vercel.app/youtube/68fa8adcde250edafc84c147"); // GET request
                if (!res.ok) throw new Error("Failed to fetch link");
                const data = await res.json();
                setLink(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchLinks();
    }, []);

    const getEmbedUrl = (url: string) => {
        if (url.includes("watch?v=")) {
            return url.replace("watch?v=", "embed/");
        }
        if (url.includes("youtu.be")) {
            return url.replace("youtu.be/", "www.youtube.com/embed/");
        }
        return url;
    };

    return (
        <div className="flex flex-col items-center px-4 mt-10 mb-20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-6">
                RTÉ interview with Martina
            </h2>
            <div className="w-full max-w-3xl aspect-video rounded-xl shadow-lg overflow-hidden">
                {link ? (
                    <iframe
                        className="w-full h-full"
                        src={getEmbedUrl(link.url)}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <div className="w-full h-full bg-gray-200 animate-pulse" />
                )}
            </div>
        </div>
    );
}
