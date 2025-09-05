import Image from "next/image"

export default function ResearchIntro() {
    return (
        <div className="relative isolate overflow-hidden px-6 pt-32 pb-20 lg:overflow-visible lg:px-0 mt-5">
            <div className="mx-auto">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="p-10 border-l border-purple">
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-gray-900">
                                    Research
                                </h1>
                                <h2 className="mt-5 text-xl font-semibold tracking-tight text-pretty text-gray-900">Mel Bonis: Violin Sonata in F-sharp Minor, Op. 112 – Transcription and Research</h2>
                                <div className="mt-6 text-xl/8 text-gray-700 space-y-6">
                                    <p>
                                        As part of my Master&rsquo;s in Music Performance dissertation, which I completed in 2024 with First Class Honours and graduating top of my class, I focused on Mel Bonis&rsquo;s Violin Sonata in F-sharp Minor, Op. 112, widely regarded as her most advanced contribution to the sonata repertoire. Composed in 1923, the work demonstrates Bonis&rsquo;s mastery of large-scale chamber writing, cyclic thematic development, and expressive harmonic language.
                                    </p>

                                    <p>
                                        I produced a transcription of the sonata for flute and piano, informed by extensive research, performance practice, and collaborative workshops. The transcription was premiered in Paris (April 2024) and in Ireland (June 2024), with further refinements developed through masterclasses at the Saline Royale Academy under Philippe Bernold and Fuminori Tanada. Editorial adjustments ensured playability and stylistic fidelity, including adaptations for the flute, clarifications of phrasing and articulation, and practical rehearsal guidance.
                                    </p>

                                    <p>
                                        I have presented this research at the Expanding Canvas Conference at Trinity College Dublin and the Royal Irish Academy of Music (August 2025), as well as at the 2024 SMI/ICTMD Postgraduate Conference at Maynooth University. This project highlights Bonis&rsquo;s innovative chamber music voice and contributes to the ongoing revival of her neglected but significant repertoire.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-auto p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 flex justify-center align-center">
                        <Image
                            src="/photo5.jpg"
                            width={1080}
                            height={720}
                            alt="photo of Martina"
                            className="w-full max-w-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
