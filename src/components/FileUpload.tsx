import React, { useCallback, useState } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import Papa from 'papaparse';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';

interface Dataset {
  [key: string]: string | number | boolean;
}

interface FileUploadProps {
  onDatasetLoaded: (data: Dataset[]) => void;
}

export function FileUpload({ onDatasetLoaded }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = useCallback((file: File) => {
    if (!file.name.endsWith('.csv')) {
      setError('Please upload a CSV file');
      return;
    }

    setError(null);
    Papa.parse(file, {
      complete: (results) => {
        onDatasetLoaded(results.data as Dataset[]);
      },
      header: true,
      dynamicTyping: true,
      error: (error) => {
        setError(error.message);
      },
    });
  }, [onDatasetLoaded]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  }, [handleFileUpload]);

  return (
    <Card className="w-full max-w-xl mx-auto">
      <div
        className={`relative ${isDragging ? 'bg-indigo-50' : 'bg-gray-50'}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <label className="flex flex-col items-center justify-center min-h-[200px] rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center pt-5 pb-6"
          >
            <Upload className="w-12 h-12 mb-4 text-indigo-500" />
            <p className="mb-2 text-lg font-semibold text-gray-700">
              <span className="text-indigo-600">Click to upload</span> or drag and drop
            </p>
            <p className="text-sm text-gray-500 flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              CSV file containing DDoS dataset
            </p>
            {error && (
              <div className="mt-4 flex items-center text-red-500 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {error}
              </div>
            )}
          </motion.div>
          <input
            type="file"
            className="hidden"
            accept=".csv"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileUpload(file);
            }}
          />
        </label>
      </div>
    </Card>
  );
}
