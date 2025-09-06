import Footer from "./footer"
import Link from "next/link"

export default function ComingSoon() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex flex-1 items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
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
                            className="rounded-md bg-purple px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
