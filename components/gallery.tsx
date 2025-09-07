import Image from "next/image"
import Footer from "./footer"
import Link from "next/link"

const products = [
    {
        id: 1,
        imageSrc: '/photo1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 2,
        imageSrc: '/photo5.jpg',
        imageAlt: "Front of men's Basic Tee in white.",
    },
    {
        id: 3,
        imageSrc: '/photo7.jpg',
        imageAlt: "Front of men's Basic Tee in dark gray.",
    },
    {
        id: 4,
        imageSrc: '/photo10.jpg',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    },
]

export default function Example() {
    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl mt-30 font-bold tracking-tight text-gray-900 text-center">Photography by Francis Marshall</h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <Image
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                width={400}
                                height={600}
                                className="w-full bg-gray-200 object-cover lg:aspect-auto lg:h-200"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <main className="flex flex-1 items-center justify-center mt-30 px-6 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-purple">
                        Under Construction
                    </p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                        Page Coming Soon
                    </h1>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/"
                            className="rounded-md bg-purple px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
