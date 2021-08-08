const createPDFAnchor = (url: string) => {
    const AnchorElement = document.createElement('a');
    AnchorElement.href = url;
    AnchorElement.download = 'rubrica.pdf';
    return AnchorElement;
};

export const downloadPDF = (PDF: Blob) => {
    const PDFURL = URL.createObjectURL(PDF);
    const PDFAnchor = createPDFAnchor(PDFURL);
    document.body.appendChild(PDFAnchor);
    PDFAnchor.click();
    document.body.removeChild(PDFAnchor);
};
