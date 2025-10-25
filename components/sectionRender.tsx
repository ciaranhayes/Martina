"use client";
import Image from "next/image";

interface SectionProps {
    title: string;
    text?: string; // optional for section 2
    imageSrc: string[]; // now can be string or array of strings
    type: string;
}

export default function SectionRenderer({ title, text, imageSrc, type }: SectionProps) {
    // Section 1: title + text + single image
    if (type === "section 1") {
        return (
            <div className="flex align-center relative isolate overflow-hidden px-6 pt-10 pb-20 lg:overflow-visible lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-y-16 gap-x-12 lg:grid-cols-4 lg:items-start">
                        <div className="lg:col-span-2">
                            <div className="pl-10 border-l border-purple">
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900">
                                    {title}
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">{text}</p>
                            </div>
                        </div>
                        <div className="lg:col-span-2 flex justify-center lg:top-10">
                            <Image
                                src={imageSrc[0]}
                                width={400}
                                height={400}
                                alt={title}
                                className="max-w-[500px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Section 2: multiple images
    if (type === "section 2") {
        return (
            <div className="flex flex-col justify-center px-6 py-12 lg:px-12">
                <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900 mb-10 text-center">
                    {title}
                </h2>
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
                    {imageSrc.map((src, index) => (
                        <div
                            key={index}
                            className="mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                        >
                            <Image
                                src={src}
                                width={600}
                                height={400}
                                alt={`Section 2 Image ${index + 1}`}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>

            </div>
        );
    }

    return null;
}
