import React from "react";


const videos = [
    "https://www.youtube.com/watch?v=iDmAsZVgeOA&list=RDiDmAsZVgeOA&start_radio=1",
    "https://www.youtube.com/watch?v=v7Vu2wN3h2Q",
    "https://youtu.be/Lxk6Y0awYmY",
]

export default function YouTubeGallery() {
    return (
        <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((video, index) => {
                    const videoId =
                        video.split("v=")?.[1]?.split("&")[0] ||
                        video.split("/").pop();
                    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

                    return (
                        <div
                            key={index}
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
