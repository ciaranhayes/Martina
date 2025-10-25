"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

interface Bio {
    _id: string
    title: string
    category: string
    text: string
}

export default function Arts() {
    const [bio, setBio] = useState<Bio | null>(null);

    useEffect(() => {
        async function fetchBios() {
            try {
                const res = await fetch("https://martina-api-rryn.vercel.app/bios/68fa74110758685b9f374fde"); // GET request
                if (!res.ok) throw new Error("Failed to fetch bios");
                const data = await res.json();
                setBio(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchBios();
    }, []);
    return (
        <div className="relative isolate overflow-hidden px-6 pt-32 pb-20 lg:overflow-visible lg:px-0 mt-5">
            <div className="mx-auto">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="p-10 border-l border-purple text-gray-900">
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-gray-900">
                                    Arts Management
                                </h1>
                                {/* <p className="mt-6 text-xl/8 text-gray-700 space-y-6">
                                    Martina has worked with some of Ireland&apos;s leading arts organisations, including the National Symphony Orchestra of Ireland, RT&Eacute; Concert Orchestra, Irish Baroque Orchestra, and the West Wicklow Chamber Music Festival. She is highly organised and professional, with a proven track record in arts management, education programming, and orchestral administration. Known as a reliable and hardworking colleague, Martina consistently delivers projects with creativity, dedication, and attention to detail.
                                </p> */}
                                    {bio?.text
                        .replace(/\\n/g, '\n')
                        .split('\n')
                        .filter(line => line.trim() !== '')
                        .map((paragraph, index) => {
                            // Detect heading syntax first
                            const headingMatch = paragraph.match(/^\[heading:\s*(.*?)\s*\]$/i)
                            if (headingMatch) {
                                const headingText = headingMatch[1]
                                return (
                                    <h2
                                        key={`heading-${index}`}
                                        className="mt-6 text-xl font-semibold tracking-tight text-pretty text-gray-900"
                                    >
                                        {headingText}
                                    </h2>
                                )
                            }

                            // Otherwise treat it as a normal paragraph (with links)
                            const parts: React.ReactNode[] = []
                            let lastIndex = 0
                            const regex = /\[link:\s*(https?:\/\/[^\s|]+)\s*\|\s*([^\]]+)\]/gi
                            let match

                            while ((match = regex.exec(paragraph)) !== null) {
                                const [full, url, label] = match
                                const before = paragraph.slice(lastIndex, match.index)
                                if (before) parts.push(before)
                                parts.push(
                                    <a
                                        key={`${index}-${match.index}`}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple font-semibold hover:underline"
                                    >
                                        {label}
                                    </a>
                                )
                                lastIndex = match.index + full.length
                            }

                            const after = paragraph.slice(lastIndex)
                            if (after) parts.push(after)

                            return (
                                <p key={index} className="p-1.5 leading-relaxed">
                                    {parts}
                                </p>
                            )
                        })}
                                {/* <h2 className="mt-6 text-xl font-semibold tracking-tight text-pretty text-gray-900">Board Work</h2>
                                <p className="mt-2 text-xl/8 text-gray-700 space-y-6">
                                    Martina Rosaria O&apos;Connell serves on the Board of Directors of the{" "}
                                    <a
                                        href="https://www.dyo.ie/our-team"
                                        className="text-gray-600 underline hover:text-gray-900 hover:underline transition-colors duration-300"
                                    >
                                        Dublin Youth Orchestra.
                                    </a>{" "}
                                    As an alumna of the orchestra, it was a great honour for her to be invited to join. She greatly enjoys contributing to this progressive and forward-thinking board, bringing her expertise in music education, arts management, and artistic curation.
                                </p> */}

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
