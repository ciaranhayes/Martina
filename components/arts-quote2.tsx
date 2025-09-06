const quote = {
    id: 1,
    text: "I had the joy of working with Martina in her capacity as Orchestra Assistant for the Irish Baroque Orchestra and Course Manager for the Irish Youth Baroque Orchestra last year. Martina is a very dependable and hardworking colleague, who approachings everything with calm, focus, and a real sense of teamwork. It was a great pleasure to work with her. Any team would be lucky to have her on board!",
    author: "Doireann Kelly - General Manager - Irish Baroque Orchestra",
}

export default function QuoteArts2() {
    return (
        <section className="relative isolate overflow-hidden px-6 py-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="relative bg-purple rounded shadow-lg  border border-gray-200 p-10">
                    <span className="absolute top-3 left-6 text-6xl text-purple-300 font-serif select-none">“</span>

                    <blockquote className="text-center italic text-xl font-medium text-white sm:text-2xl">
                        <p>{quote.text}</p>
                    </blockquote>

                    <figcaption className="mt-8">
                        <div className="flex items-center justify-center">
                            <div className="font-semibold text-white text-lg">
                                — {quote.author}
                            </div>
                        </div>
                    </figcaption>
                    <span className="absolute bottom-18 right-6 text-6xl text-purple-300 font-serif select-none">”</span>
                </figure>
            </div>
        </section>
    )
}
