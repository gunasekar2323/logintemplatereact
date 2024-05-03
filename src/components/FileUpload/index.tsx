import React, { useRef, useCallback } from 'react';
import './styles.css';

type FileUploadProps = {
  isMulti?: boolean,
  accept: string,
  onSelectFiles: (files: File[]) => void,
  disabled?: boolean
}

const FileUpload: React.FC<FileUploadProps> = ({
  isMulti = false,
  accept,
  onSelectFiles,
  disabled,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);



  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleFiles(e.target.files);
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const containerElement = containerRef.current;
    if (containerElement?.contains(e.target as Node)) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;
    const selectedFiles = Array.from(files);
    onSelectFiles(selectedFiles);
  }, [onSelectFiles]);

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      <div
        ref={containerRef}
        className="file-upload-container"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <div
          className="file-upload-text"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {"Drag 'n' drop some files here"}
        </div>
        <div
          className="file-upload-text"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          OR
          <label
            htmlFor="file-input"
            className="file-upload-option"
          >
            Choose a file
          </label>
        </div>
        <input
          type="file"
          id="file-input"
          hidden
          multiple={isMulti}
          disabled={disabled}
          accept={accept}
          onChange={handleFileInputChange}
        />
      </div>
    </div>
  );
};

export default FileUpload;
