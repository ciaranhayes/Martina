import Image from "next/image"

export default function ContentContainerWithPhotoLeft({
    url,
    alt,
    title,
    body,
}: {
    url: string
    alt: string
    title: string
    body: string
}) {
    return (
        <div className="text-[#292842] overflow-hidden">
            <div className="mx-auto max-w-7xl max-height-[500px] px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:max-w-none lg:grid-cols-2 gap-4 items-start">
                    <div className="flex flex-col space-y-6">
                        <article className="flex max-w-xl flex-col items-start justify-between border-l border-purple p-5 max-h-[500px] overflow-y-auto">
                            <div className="group relative grow">
                                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                                    <span className="absolute inset-0" />
                                    {title}
                                </h3>
                                <p className="mt-5 text-sm leading-relaxed whitespace-pre-line">
                                    {body}
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="flex justify-center sticky top-20 self-start">
                        <Image
                            src={url}
                            alt={alt}
                            width={500}
                            height={500}
                            className="mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
