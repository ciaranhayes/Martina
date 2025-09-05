const quote = {
    id: 1,
    text: "An outstanding flutist of her generation, Martina has a natural gift of communication to her audience through her flute playing in a very engaging way. Multi-talented, dependable and resourceful - a rare combination these days",
    author: "Sir James & Lady Galway",
}

export default function QuotationBox() {
    return (
        <section className="relative isolate overflow-hidden px-6 py-24 lg:px-8">
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
