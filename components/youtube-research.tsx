export default function YouTubeEmbed() {
    return (
        <div className="flex flex-col items-center px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-6">
                World Premiere of Bonis Sonata
            </h2>
            <div className="w-full max-w-3xl aspect-video rounded-xl shadow-lg overflow-hidden">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/1TqvByHuK9w?si=8VM44CQBTllQ0C4f"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}
