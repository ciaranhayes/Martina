import Image from "next/image"

export default function PerformanceIntro() {
    return (
        <div className="relative isolate overflow-hidden px-6 pt-24 sm:pt-32 lg:overflow-visible lg:px-0 mt-5">
            <div className="mx-auto">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="p-10 border-l border-purple">
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-gray-900">
                                    Performance
                                </h1>
                                <div className="mt-6 text-xl/8 text-gray-700 space-y-6">
                                    <p>
                                        Martina Rosaria O’Connell is a highly accomplished Irish-Italian flautist and music educator. She recently completed her Master’s in Flute Performance with Distinction, graduating top of her class at the Royal Irish Academy of Music. Martina also holds a First-Class Honours degree in Music Education from Trinity College Dublin.
                                    </p>

                                    <p>
                                        At just 12 years old, Martina was awarded a six-year music scholarship to Wesley College, Dublin. Her exceptional talent has been recognized with numerous awards, including the Trench Award, Liam Swords Award, Arts Council of Ireland's Agility Award, and Music Network’s Music Capital Scheme.
                                    </p>

                                    <p>
                                        In 2023, Martina made her concerto debut with the Trinity College Orchestra, performing Mozart’s <em>Concerto for Flute and Harp</em>. In February 2024, she was a finalist in the Maura Dowdall Concerto Competition. That same year, Martina premiered her flute transcription of Mel Bonis’s <em>Violin Sonata in F-Sharp Minor</em> in April at the Centre Culturel Irlandais in Paris and subsequently gave its Irish premiere in June at the Fête de la Musique, attended by the French Ambassador to Ireland, HE Vincent Guérend. In May 2024, she performed her transcription as part of a live concert for Europe Day, which was broadcast on RTÉ Lyric FM.
                                    </p>

                                    <p>
                                        In November 2024, Martina performed as part of Sir James Galway’s 85th Birthday Celebration at the KKL Luzern, marking another milestone in her flourishing career.
                                        She has been a scholarship student at the Galway Flute Academy under Sir James and Lady Jeanne Galway since 2020 and has participated in prestigious international programs such as Camerata Ireland, the Saline Royale Academy, the Scottish International Flute Summer School, and the Grolloo Flute Sessions in the Netherlands.
                                    </p>

                                    <p>
                                        Martina’s career spans solo, chamber, and orchestral performances. She has performed with the National Symphony Orchestra of Ireland, Irish Baroque Orchestra, Dublin Symphony Orchestra, RIAM Philharmonia, and Esker Festival Orchestra. In addition to her performance career, she teaches Musicianship in the Junior and Adult Divisions of the Royal Irish Academy of Music. She is also the Head of Education at the West Wicklow Chamber Music Festival, Assistant Orchestra Manager of the Irish Baroque Orchestra, and serves on the Board of Directors for the Dublin Youth Orchestra.
                                    </p>

                                    <p>
                                        Martina is deeply passionate about sharing her love of music through her performances and her work as an educator. Her dedication, artistry, and versatility reflect her commitment to inspiring others and establishing herself as a prominent voice among Ireland’s emerging musicians.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-auto p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <Image
                            src="/photo7.jpg"
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
