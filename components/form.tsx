export default function Form() {
    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <form className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold text-gray-900">Enquiries</h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Please feel free to reach out to me here with any enquiries you may have.
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Jane Smith"
                                        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="janesmith@gmail.com"
                                        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        placeholder="Write your message here"
                                        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}