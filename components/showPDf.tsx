export default function PDFViewer() {
    return (
        <embed
            src="/diss.pdf"
            type="application/pdf"
            style={{
                width: "100vw",
                height: "100vh",
                border: "none"
            }}
        />
    );
}
