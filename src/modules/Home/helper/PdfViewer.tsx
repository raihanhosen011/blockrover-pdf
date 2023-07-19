import { useEffect, useRef } from 'react';

function PdfViewer() {
  const pdfViewerContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (pdfViewerContainerRef.current) {
      const iframe = document.createElement('iframe');
      iframe.src = '/blockrover-whitepaper.pdf';
      iframe.frameBorder = '0';
      iframe.width = '100%';
      iframe.height = '100%';
      pdfViewerContainerRef.current.appendChild(iframe);
    }
  }, []);

  return <div className='hidden sm:block' ref={pdfViewerContainerRef} style={{ height: '100vh' }}></div>;
}

export default PdfViewer;