import Image from "next/image"

export default function PhotoOnRight() {
    return (
        <div className="relative isolate overflow-hidden px-6 pt-24 sm:pt-32 lg:overflow-visible lg:px-0 mt-5">
            <div className="mx-auto">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="p-10 border-l border-purple">
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-gray-900">
                                    Education
                                </h1>
                                <div className="mt-6 text-xl/8 text-gray-700 space-y-6">
                                    <p>
                                        Martina Rosaria O&apos;Connell is an experienced music educator in flute and music theory, dedicated to making music accessible and enjoyable for learners of all ages.
                                        She holds a First Class Honours Bachelor of Music Education from Trinity College Dublin and the Royal Irish Academy of Music (RIAM), which included a six-month Erasmus placement at the Royal Conservatoire of Scotland. She also earned a Master&apos;s in Flute Performance from RIAM and Trinity College Dublin, graduating with distinction and achieving the highest result in her year.
                                    </p>

                                    <p>
                                        Martina was a music scholarship student at Wesley College Dublin for the duration of her post-primary education. She began studying at Technological University Dublin (formerly DIT) at the age of 16 with Ciaran O&apos;Connell and has since learned from many of the world&apos;s top flautists, including nationally William Dowdall, Vourneen Ryan, Sinéad Farrell, and Susan Doyle, and internationally Sir James Galway, Lady Jeanne Galway, Ruth Morley, Wissam Boustany, and Ian Clarke. Her participation in international courses—such as the Camerata Ireland Academy, Saline Royale Academy in France, the Scottish International Flute Summer School, and the Groolo Flute Sessions in the Netherlands—has given her a broad perspective on global standards, repertoire, and teaching approaches.
                                    </p>

                                    <p>
                                        A qualified post-primary music teacher, Martina has extensive experience in both classroom and community settings. She has taught Junior Musicianship at RIAM since her time as an 1848 Scholar during her master&apos;s studies and is now in her second year teaching in both the RIAM Junior and Adult Divisions. She curated the Adult Introduction to Music Theory course at RIAM, which sold out in two consecutive runs and led to the creation of a continuation course with an exam focus.
                                        She served as Head of Education for the West Wicklow Chamber Music Festival, developing accessible and engaging Music Appreciation classes for adults. She has also coordinated and led music camps and outreach projects both nationally and internationally, including the It&apos;s Time Music Education Outreach Project, which was featured on RTÉ News2Day.
                                    </p>

                                    <p>
                                        Martina also runs a private flute studio, offering biweekly lessons that focus on developing strong technical skills, musicianship, and a rich, personal sound.
                                        Her teaching blends formal training with a commitment to inclusive, creative, and inspiring learning experiences, ensuring that music can be enjoyed by all—regardless of age, ability, or background.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-auto p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <Image
                            src="/photo9.jpg"
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
