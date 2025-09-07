import Link from "next/link"
const posts = [
    {
        id: 1,
        title: 'Excellent course - really engaging teacher, clear information provided, good curriculum with opportunities to both practise learning and extend knowledge.',
        href: 'https://www.riam.ie/short-courses/adult-music-theory-classes-entry-level'
    },
    {
        id: 3,
        title: "I really enjoyed Martina's teaching style - it is engaging, interesting and agile. Martina teaches with a passion for her music and subject which is contagious.",
        href: 'https://www.riam.ie/short-courses/adult-music-theory-classes-entry-level'
    },
    {
        id: 4,
        title: "An excellent instructor. She covered so much with great enthusiasm and she dealt with questions in a very engaging way.",
        href: 'https://www.riam.ie/short-courses/adult-music-theory-classes-entry-level'
    },
]

export default function EducationTestimonials() {
    return (
        <div className="text-white mt-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h1 className="text-3xl mt-10 font-bold text-center text-gray-700">
                    Testimonials from the Adult Division at RIAM
                </h1>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16
                        sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3 gap-4 justify-center">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="flex max-w-xl flex-col items-start justify-between bg-purple rounded p-10 transition transform duration-200 ease-in-out hover:shadow-lg hover:scale-[1.10]"
                        >
                            <div className="group relative grow">
                                <h3 className="mt-3 text-lg/6 font-semibold">
                                    <Link href={post.href}>
                                        <span className="absolute inset-0" />
                                        &ldquo;{post.title}&rdquo;
                                    </Link>
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
