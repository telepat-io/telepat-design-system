import { ChangeEvent, DragEvent, ReactNode, useRef, useState } from "react";
import styles from "./Dropzone.module.css";

export interface DropzoneProps {
  label?: ReactNode;
  sub?: ReactNode;
  /** Comma-separated accept attribute (e.g. ".png,.jpg,application/pdf"). */
  accept?: string;
  multiple?: boolean;
  onFiles?: (files: File[]) => void;
  className?: string;
}

export function Dropzone({
  label = "Drag and drop or click to upload files",
  sub = "PNG, JPG, PDF up to 25MB",
  accept,
  multiple = true,
  onFiles,
  className,
}: DropzoneProps) {
  const [hover, setHover] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    onFiles?.(Array.from(files));
  };
  const onPick = (e: ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files);
  const onDrop = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHover(false);
    handleFiles(e.dataTransfer.files);
  };
  const onDragOver = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHover(true);
  };

  return (
    <>
      <button
        type="button"
        className={[styles.zone, hover && styles.hover, className].filter(Boolean).join(" ")}
        onClick={() => inputRef.current?.click()}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={() => setHover(false)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5">
          <path d="M12 16 V4 M6 10 L12 4 L18 10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 16 V19 a1 1 0 0 0 1 1 H19 a1 1 0 0 0 1 -1 V16" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={styles.label}>{label}</span>
        {sub && <span className={styles.sub}>{sub}</span>}
      </button>
      <input ref={inputRef} type="file" accept={accept} multiple={multiple} onChange={onPick} style={{ display: "none" }} />
    </>
  );
}
