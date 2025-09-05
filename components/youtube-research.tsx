export default function YouTubeEmbed() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-10">
                World Premiere of Bonis Sonata
            </h2>
            <div className="mt-5 w-full max-w-3xl aspect-video min-h-[500px] rounded-xl shadow-lg overflow-hidden">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/1TqvByHuK9w?si=8VM44CQBTllQ0C4f"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}
