'use client'
import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";

export default function PDFViewer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    }, []);

    if (isMobile) {
        return (
            <>
                <Header />
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-12 bg-[#EFF0E2]">
                    <p className="text-lg md:text-xl font-semibold mb-6 text-gray-700">
                        Viewing PDFs is limited on mobile. Please download:
                    </p>
                    <a
                        href="/diss.pdf"
                        download
                        className="inline-block px-6 py-3 bg-purple text-white font-medium rounded-lg shadow hover:bg-purple-700 transition-colors duration-300"
                    >
                        Download PDF
                    </a>
                </div>
                <Footer />

            </>
        );
    }

    return (
        <embed
            src="/diss.pdf"
            type="application/pdf"
            style={{ width: "100vw", height: "100vh", border: "none" }}
        />
    );
}
