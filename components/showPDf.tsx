export default function PDFViewer() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <p>Viewing PDFs is limited on mobile. Please download:</p>
                <a href="/diss.pdf" download>Download PDF</a>
            </div>
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
