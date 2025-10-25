"use client"
import Image from "next/image"
import Footer from "./footer"
// import Link from "next/link"
import FreeResources from "./freeResources"
import { useState, useEffect } from "react"
import SectionRenderer from "./sectionRender"

const photos = [
    {
        id: 1,
        imageSrc: '/photo1.jpg',
        imageAlt: "Photo",
    },
    {
        id: 2,
        imageSrc: '/photo5.jpg',
        imageAlt: "Photo",
    },
    {
        id: 3,
        imageSrc: '/photo7.jpg',
        imageAlt: "Photo",
    },
    {
        id: 4,
        imageSrc: '/photo10.jpg',
        imageAlt: "Photo",
    },
]

interface Section {
    _id: string;
    title: string;
    text? : string;
    imageSrc: string[];
    type: string;
}

export default function Gallery() {


    const [sections, setSections] = useState<Section[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchSections() {
            try {
                const res = await fetch("https://martina-api-rryn.vercel.app/section");
                if (!res.ok) throw new Error("Failed to fetch sections");
                const data: Section[] = await res.json();
                setSections(data);
            } catch (err) {
                console.error(err);
                setError("An error occurred while fetching sections.");
            } finally {
                setLoading(false);
            }
        }

        fetchSections();
    }, []);

    if (loading) {
        return <p className="text-center text-purple mt-10">Loading sections...</p>;
    }

    return (
        <div className="bg-[#EFF0E2]">
            <div className="mx-auto max-w-2xl mt-10 pt-20 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Photography by Frances Marshall</h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-8">
                    {photos.map((product) => (
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
            {/* <main className="flex flex-1 items-center justify-center mt-30 px-6 sm:py-32 lg:px-8">
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
            </main> */}
            <FreeResources />

            {sections.map((sec) => (
                <SectionRenderer
                    key={sec._id}
                    title={sec.title}
                    text={sec.text}
                    imageSrc={sec.imageSrc}
                    type={sec.type}
                />
            ))}

            <Footer />
        </div>
    )
}
