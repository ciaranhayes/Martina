import Image from "next/image"

export default function GeneralBio() {
    return (
        <div className="relative isolate overflow-hidden px-6 pt-24 sm:pt-32 lg:overflow-visible lg:px-0 mt-5">
            <div className="mx-auto">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="p-10 border-l border-purple">
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-gray-900">
                                    About Me
                                </h1>
                                <div className="mt-6 text-xl/8 text-gray-700 space-y-6">
                                    <p>
                                        Martina Rosaria O&rsquo;Connell is a highly accomplished Irish-Italian flautist, music educator, and arts professional, dedicated to making music accessible, inspiring, and enjoyable for learners of all ages. She holds a First-Class Honours Bachelor of Music Education from Trinity College Dublin and the Royal Irish Academy of Music (RIAM), and a Master&rsquo;s in Flute Performance with Distinction, graduating top of her class.
                                    </p>

                                    <p>
                                        Her career spans solo, chamber, and orchestral performances, including appearances with the RT&Eacute; Concert Orchestra, National Symphony Orchestra of Ireland and Irish Baroque Orchestra. Martina has performed internationally, including her premiere of Mel Bonis&rsquo;s Violin Sonata in F-Sharp Minor, transcribed for flute and piano, in Paris and Ireland, and she participated in Sir James Galway&rsquo;s 85th Birthday Celebration at KKL Luzern. She has studied under world-renowned flautists, including Sir James and Lady Jeanne Galway, Ruth Morley, Ian Clarke, and William Dowdall.
                                    </p>

                                    <p>
                                        As an educator, Martina teaches Musicianship in both the Junior and Adult Divisions of RIAM and runs a private flute studio. She curated the popular Adult Introduction to Music Theory course at RIAM, and previously served as Head of Education for the West Wicklow Chamber Music Festival, creating engaging music appreciation programs for adults. She also contributes to national and international outreach projects, including the It&rsquo;s Time Music Education project featured on RT&Eacute; News2Day.
                                    </p>

                                    <p>
                                        Martina serves on the Board of Directors for the Dublin Youth Orchestra and has extensive experience in arts management and orchestral administration, bringing creativity, professionalism, and dedication to every project she undertakes.
                                    </p>

                                    <p>
                                        Her work reflects a commitment to excellence, inclusivity, and inspiring others through both performance and teaching, establishing her as one of Ireland&rsquo;s leading emerging musicians.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-auto p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <Image
                            src="/photo1.jpg"
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
