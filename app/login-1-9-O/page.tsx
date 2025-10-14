"use client"
import Image from "next/image"
import { useState } from "react"

export default function LogIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const res = await fetch("https://martina-api-rryn.vercel.app/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })

            const data = await res.json()

            if (data.success) {
                // ✅ Only persists while browser tab is open
                sessionStorage.setItem("authToken", "logged-in")
                window.location.href = "/edit28dfb3u2"
            } else {
                setMessage(data.message || "Invalid login")
            }
        } catch (err) {
            setMessage("Something went wrong. Please try again.")
        }
    }

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    className="mx-auto h-10 w-auto"
                    width={20}
                    height={40}
                />
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-purple">
                    Welcome Martina ❤️
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-purple">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-md border px-3 py-2 text-purple placeholder:text-gray-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-purple">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md border px-3 py-2 text-purple placeholder:text-gray-500"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-purple px-3 py-1.5 font-semibold text-white hover:bg-purple-900"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                {message && (
                    <p className="mt-4 text-center text-sm text-purple">{message}</p>
                )}
            </div>
        </div>
    )
}
