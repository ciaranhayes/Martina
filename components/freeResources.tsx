"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Resource {
    _id: string;
    name: string;
    url: string;
    imageSrc: string;
    description: string;
    type: boolean; // true = paid, false = free
}

export default function FreeResources() {
    const [resources, setResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchResources() {
            try {
                const res = await fetch("https://martina-api-rryn.vercel.app/resource");
                if (!res.ok) throw new Error("Failed to fetch resources");
                const data = await res.json();
                setResources(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchResources();
    }, []);

    const freeResources = resources.filter(r => r.type === false);
    const paidResources = resources.filter(r => r.type === true);

    return (
        <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900 text-center">
                    Free & Paid Resources
                </h1>

                {loading ? (
                    <p className="mt-6 text-gray-600 text-center">Loading resources...</p>
                ) : resources.length === 0 ? (
                    <p className="mt-12 text-center text-gray-500 text-xl">Resources coming soon</p>
                ) : (
                    <>
                        {/* Free Resources Section */}
                        {freeResources.length > 0 && (
                            <div className="mt-12">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Free Resources</h2>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                    {freeResources.map(resource => (
                                        <a
                                            key={resource._id}
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative"
                                        >
                                            <Image
                                                src={resource.imageSrc}
                                                alt={resource.name}
                                                width={500}
                                                height={500}
                                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                            />
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                    <h3 className="text-md text-gray-900 font-semibold">{resource.name}</h3>
                                                    <p className="mt-1 text-sm text-gray-800">{resource.description}</p>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Paid Resources Section */}
                        {paidResources.length > 0 && (
                            <div className="mt-16">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Paid Resources</h2>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                    {paidResources.map(resource => (
                                        <a
                                            key={resource._id}
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative"
                                        >
                                            <Image
                                                src={resource.imageSrc}
                                                alt={resource.name}
                                                width={500}
                                                height={500}
                                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                            />
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                    <h3 className="text-md text-gray-900 font-semibold">{resource.name}</h3>
                                                    <p className="mt-1 text-sm text-gray-800">{resource.description}</p>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
