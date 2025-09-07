export default function YouTubeEducation() {
    return (
        <div className="flex flex-col items-center px-4 mt-10 mb-20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-6">
                RTÉ interview with Martina
            </h2>
            <div className="w-full max-w-3xl aspect-video rounded-xl shadow-lg overflow-hidden">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/J13hJMieYaw"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}
