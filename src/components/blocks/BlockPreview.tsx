import { ReactNode, useState } from "react";
import { Check, Copy, Code2, Eye, ChevronRight, ChevronDown, File, Folder, Download, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface BlockFile {
  name: string;
  path: string;
  content: string;
}

interface BlockPreviewProps {
  title: string;
  description?: string;
  children: ReactNode;
  files: BlockFile[];
  className?: string;
  installCommand?: string;
}

interface FileTreeProps {
  files: BlockFile[];
  selectedFile: string;
  onSelectFile: (path: string) => void;
}

function buildFileTree(files: BlockFile[]) {
  const tree: Record<string, any> = {};
  
  files.forEach(file => {
    const parts = file.path.split('/');
    let current = tree;
    
    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        current[part] = { type: 'file', path: file.path, name: part };
      } else {
        if (!current[part]) {
          current[part] = { type: 'folder', children: {}, name: part };
        }
        current = current[part].children;
      }
    });
  });
  
  return tree;
}

function FileTreeNode({ 
  node, 
  name, 
  selectedFile, 
  onSelectFile, 
  level = 0 
}: { 
  node: any; 
  name: string; 
  selectedFile: string; 
  onSelectFile: (path: string) => void;
  level?: number;
}) {
  const [isOpen, setIsOpen] = useState(true);
  
  if (node.type === 'file') {
    return (
      <button
        onClick={() => onSelectFile(node.path)}
        className={cn(
          "flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded-md transition-colors text-left",
          selectedFile === node.path 
            ? "bg-primary/10 text-primary font-medium" 
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        <File className="h-4 w-4 shrink-0" />
        <span className="truncate">{name}</span>
      </button>
    );
  }
  
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        {isOpen ? (
          <ChevronDown className="h-4 w-4 shrink-0" />
        ) : (
          <ChevronRight className="h-4 w-4 shrink-0" />
        )}
        <Folder className="h-4 w-4 shrink-0" />
        <span>{name}</span>
      </button>
      {isOpen && node.children && (
        <div>
          {Object.entries(node.children).map(([childName, childNode]) => (
            <FileTreeNode
              key={childName}
              node={childNode}
              name={childName}
              selectedFile={selectedFile}
              onSelectFile={onSelectFile}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FileTree({ files, selectedFile, onSelectFile }: FileTreeProps) {
  const tree = buildFileTree(files);
  
  return (
    <div className="py-2">
      <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
        Files
      </div>
      {Object.entries(tree).map(([name, node]) => (
        <FileTreeNode
          key={name}
          node={node}
          name={name}
          selectedFile={selectedFile}
          onSelectFile={onSelectFile}
        />
      ))}
    </div>
  );
}

export function BlockPreview({
  title,
  description,
  children,
  files,
  className,
  installCommand,
}: BlockPreviewProps) {
  const [copied, setCopied] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [selectedFile, setSelectedFile] = useState(files[0]?.path || "");
  
  const currentFile = files.find(f => f.path === selectedFile);

  const copyCode = () => {
    if (currentFile) {
      navigator.clipboard.writeText(currentFile.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const copyPrompt = () => {
    const allCode = files.map(f => `// ${f.path}\n${f.content}`).join('\n\n');
    navigator.clipboard.writeText(allCode);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className={cn("rounded-xl border border-border/50 overflow-hidden bg-card", className)}>
      {/* Header */}
      <div className="border-b border-border/50 bg-muted/30 px-4 py-3 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
          )}
        </div>
        {installCommand && (
          <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground bg-background/80 px-3 py-1.5 rounded-md border border-border/50">
            <span className="text-foreground font-mono">{">"}</span>
            <span className="font-mono">{installCommand}</span>
          </div>
        )}
      </div>

      <Tabs defaultValue="preview" className="w-full">
        {/* Tabs Bar */}
        <div className="flex items-center justify-between border-b border-border/50 px-4 bg-muted/20">
          <TabsList className="h-12 bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4"
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4"
            >
              <Code2 className="h-4 w-4 mr-2" />
              Code
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={copyPrompt} className="gap-2">
              {copiedPrompt ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Sparkles className="h-4 w-4" />
              )}
              <span className="hidden sm:inline">{copiedPrompt ? "Copied!" : "Copy Prompt"}</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Preview Tab */}
        <TabsContent value="preview" className="m-0">
          <div className="p-6 bg-background min-h-[400px] flex items-center justify-center">
            <div className="w-full">{children}</div>
          </div>
        </TabsContent>

        {/* Code Tab */}
        <TabsContent value="code" className="m-0">
          <div className="flex min-h-[500px]">
            {/* File Tree Sidebar */}
            <div className="w-64 border-r border-border/50 bg-muted/20 shrink-0 hidden md:block">
              <ScrollArea className="h-[500px]">
                <FileTree 
                  files={files} 
                  selectedFile={selectedFile} 
                  onSelectFile={setSelectedFile} 
                />
              </ScrollArea>
            </div>
            
            {/* Code View */}
            <div className="flex-1 flex flex-col">
              {/* File Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-muted/10">
                <div className="flex items-center gap-2 text-sm">
                  <File className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{selectedFile}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={copyCode} className="h-7 gap-1.5">
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  <span className="text-xs">{copied ? "Copied!" : "Copy"}</span>
                </Button>
              </div>
              
              {/* Code Content */}
              <ScrollArea className="flex-1 h-[450px]">
                <pre className="p-4 text-sm">
                  <code className="text-foreground font-mono leading-relaxed whitespace-pre">
                    {currentFile?.content || "// Select a file to view its contents"}
                  </code>
                </pre>
              </ScrollArea>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface BlockPageProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function BlockPage({ title, description, children }: BlockPageProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-12">{children}</div>
    </div>
  );
}
