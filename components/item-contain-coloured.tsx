"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Event {
    _id: string;
    title: string;
    href: string;
    description: string;
    date: string;
}

export default function ContentContainerColoured() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const res = await fetch("https://martina-api-rryn.vercel.app/events", {
                    cache: "no-store",
                });
                if (!res.ok) throw new Error("Failed to fetch events");
                const data: Event[] = await res.json();
                setEvents(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchEvents();
    }, []);

    return (
        <div className="text-white mt-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h1 className="text-3xl mt-10 mb-5 font-bold text-center text-gray-700">
                    Past & Upcoming Events
                </h1>

                {loading && <p className="text-center text-gray-500">Loading events...</p>}
                {error && <p className="text-center text-red-600">{error}</p>}

                {!loading && !error && (
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-10 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3 gap-4"
                    >
                        {events.map((event) => (
                            <article
                                key={event._id}
                                className="flex max-w-xl flex-col items-start justify-between bg-purple rounded p-10 transition transform duration-200 ease-in-out hover:shadow-lg hover:scale-[1.10]"
                            >
                                <div className="group relative grow">
                                    <h3 className="mt-3 text-lg/6 font-semibold">
                                        <Link href={event.href} target="_blank">
                                            <span className="absolute inset-0" />
                                            {event.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-2 text-xs">{event.date}</p>
                                    <p className="mt-5 line-clamp-3 text-sm/6">{event.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
