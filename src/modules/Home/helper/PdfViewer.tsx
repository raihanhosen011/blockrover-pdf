import { useEffect } from 'react';
import PDFObject from 'pdfobject';

function PdfViewer() {
  useEffect(() => {
    PDFObject.embed('/blockrover-whitepaper.pdf', '#pdf-container', {
      pdfOpenParams: { navpanes: 0 }
    });
  }, []);

  return <div id="pdf-container" style={{ height: '100vh' }}></div>;
}

export default PdfViewer;