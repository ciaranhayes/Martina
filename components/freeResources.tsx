"use client";
import { useEffect, useState } from "react";

interface Resource {
    _id: string;
    name: string;
    url: string;
    imageSrc: string;
    description: string;
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

    return (
        <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900 text-center">
                    Free Resources
                </h1>

                {loading ? (
                    <p className="mt-6 text-gray-600">Loading resources...</p>
                ) : (
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {resources.map((resource) => (
                            <div key={resource._id} className="group relative">
                                <img
                                    alt="Resource Image"
                                    src={resource.imageSrc}
                                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-md text-gray-900 font-semibold">
                                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                                <span aria-hidden="true" className="absolute inset-0"/>
                                                {resource.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-800">{resource.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
