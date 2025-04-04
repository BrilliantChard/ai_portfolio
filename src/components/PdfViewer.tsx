
import { FileText, Download } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface PdfViewerProps {
  pdfUrl: string;
  title: string;
  description?: string;
}

const PdfViewer = ({ pdfUrl, title, description }: PdfViewerProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center">
          <FileText className="text-blue-600 mr-2" />
          <h3 className="font-medium text-lg">{title}</h3>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(pdfUrl, '_blank')}
            className="flex items-center"
          >
            <FileText className="w-4 h-4 mr-1" />
            View
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => {
              const link = document.createElement('a');
              link.href = pdfUrl;
              link.download = title.replace(/\s+/g, '_') + '.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="flex items-center"
          >
            <Download className="w-4 h-4 mr-1" />
            Download
          </Button>
        </div>
      </div>
      
      {description && (
        <div className="px-4 py-2 text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700">
          {description}
        </div>
      )}
      
      {isExpanded ? (
        <div className="w-full h-[500px]">
          <iframe
            src={`${pdfUrl}#toolbar=0`}
            className="w-full h-full border-0"
            title={title}
          />
        </div>
      ) : (
        <div 
          className="p-8 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-700 cursor-pointer"
          onClick={() => setIsExpanded(true)}
        >
          <FileText className="w-12 h-12 text-blue-500 mb-2" />
          <p className="text-sm text-center text-slate-600 dark:text-slate-300">
            Click to preview the PDF
          </p>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
