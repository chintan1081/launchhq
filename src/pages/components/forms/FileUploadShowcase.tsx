import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, File, X } from "lucide-react";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export default function FileUploadShowcase() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  }, []);

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ComponentPage
      title="File Upload"
      description="File upload components with drag and drop support."
    >
      <ComponentPreview
        title="Basic File Input"
        description="Simple file input field"
        code={`<Input type="file" />`}
      >
        <div className="space-y-2 max-w-sm">
          <Label htmlFor="file">Upload file</Label>
          <Input id="file" type="file" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Drag and Drop Zone"
        description="Drag and drop file upload area"
        code={`<div
  onDrop={handleDrop}
  onDragOver={(e) => e.preventDefault()}
  onDragEnter={() => setIsDragging(true)}
  onDragLeave={() => setIsDragging(false)}
  className={cn(
    "border-2 border-dashed rounded-lg p-8 text-center",
    isDragging && "border-primary bg-primary/5"
  )}
>
  <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
  <p>Drag and drop files here, or click to select</p>
</div>`}
      >
        <div className="max-w-md">
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setIsDragging(true)}
            onDragLeave={() => setIsDragging(false)}
            className={cn(
              "border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer",
              isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-muted-foreground/50"
            )}
          >
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm font-medium">Drag and drop files here</p>
            <p className="text-xs text-muted-foreground mt-1">or click to select files</p>
            <Input
              type="file"
              className="hidden"
              multiple
              onChange={(e) => {
                const selectedFiles = Array.from(e.target.files || []);
                setFiles((prev) => [...prev, ...selectedFiles]);
              }}
            />
          </div>

          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border bg-card"
                >
                  <div className="flex items-center gap-3">
                    <File className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{file.name}</span>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
