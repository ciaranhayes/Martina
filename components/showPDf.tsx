import React from "react";

export default function PDFViewer() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-20 bg-[#EFF0E2] mt-12">
            <h1 className="mt-2 text-xl sm:text-5xl font-semibold tracking-tight text-gray-900 text-center">
                Mel Bonis: Violin Sonata in F-sharp Minor, Op. 112 – Transcription and Research
            </h1>
            <embed
                src="/diss.pdf"
                type="application/pdf"
                width={1500}
                height={800}
                className="mt-8  max-w-full sm:max-w-[1200px] h-[60vh] sm:h-[80vh] shadow-md rounded-lg border border-gray-300"
            />
        </div>
    );
}
