'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import DropDown from './dropdown'
import Image from 'next/image'

const navigation = [
    { name: <DropDown colour="text-[#EFF0E2]" background="bg-purple" />, href: '#dropdown' },
    { name: 'Enquiries', href: '/enquiries' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' }
]


export default function HeaderFront() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-[url('/photo2.jpg')] bg-cover bg-bottom pt-120 text-[#EFF0E2]">
            <header className="text-[#EFF0E2] absolute inset-x-0 top-0 z-50 pb-10">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1 justify-center">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                alt=""
                                src="/logo-cream.svg"
                                className="h-10 w-auto"
                                width={10}
                                height={10}
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item, idx) => (
                            <div key={idx} className="flex items-center">
                                {typeof item.name === "string" ? (
                                    <a href={item.href} className="text-base font-semibold">
                                        {item.name}
                                    </a>
                                ) : (
                                    item.name
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm/6 font-semibold">
                        </a>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="absolute inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-purple text-[#EFF0E2] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Image
                                    alt=""
                                    src="/logo.svg"
                                    className="h-10 w-auto"
                                    width={10}
                                    height={10}
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-5 py-10">
                                    {navigation.map((item, idx) => (
                                        <div key={idx} className="flex items-center">
                                            {typeof item.name === "string" ? (
                                                <a href={item.href} className="text-base font-semibold">
                                                    {item.name}
                                                </a>
                                            ) : (
                                                item.name
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <div className="relative isolate px-6 pt-20 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="relative text-center">
                        <div className="relative z-10 px-6 py-4">
                            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl drop-shadow-2xl">
                                Martina Rosaria O’Connell
                            </h1>
                            <p className="mt-8 text-lg font-medium sm:text-xl/8 drop-shadow-2xl">
                                Flautist - Educator - Researcher - Arts Management
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
