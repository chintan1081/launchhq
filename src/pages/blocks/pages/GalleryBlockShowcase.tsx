import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";

function GallerySection1() {
  const images = Array(6).fill(null);

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-lg text-muted-foreground">
            A collection of our best work
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((_, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl bg-muted border border-border/50 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center"
            >
              <span className="text-muted-foreground">Image {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection2() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <div className="aspect-square rounded-xl bg-muted border border-border/50 flex items-center justify-center h-full">
              <span className="text-muted-foreground">Featured</span>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-xl bg-muted border border-border/50 flex items-center justify-center">
              <span className="text-muted-foreground">1</span>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-xl bg-muted border border-border/50 flex items-center justify-center">
              <span className="text-muted-foreground">2</span>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-xl bg-muted border border-border/50 flex items-center justify-center">
              <span className="text-muted-foreground">3</span>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-xl bg-muted border border-border/50 flex items-center justify-center">
              <span className="text-muted-foreground">4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const galleryFiles1: BlockFile[] = [
  {
    name: "gallery-grid.tsx",
    path: "components/blocks/gallery-grid.tsx",
    content: `const images = Array(6).fill(null);

export function GalleryGrid() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-lg text-muted-foreground">
            A collection of our best work
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((_, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl bg-muted border border-border/50 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center"
            >
              <span className="text-muted-foreground">Image {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  },
];

const galleryFiles2: BlockFile[] = [
  {
    name: "gallery-masonry.tsx",
    path: "components/blocks/gallery-masonry.tsx",
    content: `export function GalleryMasonry() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <div className="aspect-square rounded-xl bg-muted border border-border/50 flex items-center justify-center h-full">
              <span className="text-muted-foreground">Featured</span>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-xl bg-muted border border-border/50 flex items-center justify-center">
              <span className="text-muted-foreground">1</span>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-xl bg-muted border border-border/50 flex items-center justify-center">
              <span className="text-muted-foreground">2</span>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-xl bg-muted border border-border/50 flex items-center justify-center">
              <span className="text-muted-foreground">3</span>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-xl bg-muted border border-border/50 flex items-center justify-center">
              <span className="text-muted-foreground">4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function GalleryBlockShowcase() {
  return (
    <BlockPage
      title="Gallery"
      description="Image gallery sections with different layouts."
    >
      <BlockPreview
        title="Gallery 01 - Grid"
        description="Simple image grid layout"
        files={galleryFiles1}
        installCommand="npx shadcn add gallery-01"
      >
        <GallerySection1 />
      </BlockPreview>

      <BlockPreview
        title="Gallery 02 - Masonry"
        description="Masonry-style layout with featured image"
        files={galleryFiles2}
        installCommand="npx shadcn add gallery-02"
      >
        <GallerySection2 />
      </BlockPreview>
    </BlockPage>
  );
}
