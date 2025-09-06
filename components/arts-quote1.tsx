const quote = {
    id: 1,
    text: "Martina was a joy to work with during the 2024 West Wicklow Festival season. She is committed, diligent, hugely creative and delivers everything in a warm and infectiously friendly manner. An asset to any organisation and a real team player who gives 110% every time!",
    author: "Fiachra Garvey, Artistic Director and Founder, West Wicklow Chamber Music Festival",
}

export default function QuoteArts1() {
    return (
        <section className="relative isolate overflow-hidden px-6 py-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="relative bg-[#292842] rounded-2xl shadow-lg  border border-gray-200 p-10">
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
