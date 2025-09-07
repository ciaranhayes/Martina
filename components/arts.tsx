import Image from "next/image"

export default function Arts() {
    return (
        <div className="relative isolate overflow-hidden px-6 pt-32 pb-20 lg:overflow-visible lg:px-0 mt-5">
            <div className="mx-auto">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="p-10 border-l border-purple">
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-gray-900">
                                    Arts Management
                                </h1>
                                <p className="mt-6 text-xl/8 text-gray-700 space-y-6">
                                    Martina has worked with some of Ireland&apos;s leading arts organisations, including the National Symphony Orchestra of Ireland, RT&Eacute; Concert Orchestra, Irish Baroque Orchestra, and the West Wicklow Chamber Music Festival. She is highly organised and professional, with a proven track record in arts management, education programming, and orchestral administration. Known as a reliable and hardworking colleague, Martina consistently delivers projects with creativity, dedication, and attention to detail.
                                </p>
                                <h2 className="mt-6 text-xl font-semibold tracking-tight text-pretty text-gray-900">Board Work</h2>
                                <p className="mt-2 text-xl/8 text-gray-700 space-y-6">
                                    Martina Rosaria O&apos;Connell serves on the Board of Directors of the{" "}
                                    <a
                                        href="https://www.dyo.ie/our-team"
                                        className="text-gray-600 underline hover:text-gray-900 hover:underline transition-colors duration-300"
                                    >
                                        Dublin Youth Orchestra.
                                    </a>{" "}
                                    As an alumna of the orchestra, it was a great honour for her to be invited to join. She greatly enjoys contributing to this progressive and forward-thinking board, bringing her expertise in music education, arts management, and artistic curation.
                                </p>

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
