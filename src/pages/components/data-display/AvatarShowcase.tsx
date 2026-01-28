import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const users = [
  { name: "John Doe", image: "https://github.com/shadcn.png", initials: "JD" },
  { name: "Jane Smith", image: "", initials: "JS" },
  { name: "Bob Johnson", image: "", initials: "BJ" },
  { name: "Alice Brown", image: "", initials: "AB" },
];

export default function AvatarShowcase() {
  return (
    <ComponentPage
      title="Avatar"
      description="An image element with fallback for representing users."
    >
      <ComponentPreview
        title="Basic Avatar"
        description="Avatar with image and fallback"
        code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
      >
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Avatar Sizes"
        description="Different avatar sizes"
        code={`<Avatar className="h-8 w-8">...</Avatar>
<Avatar className="h-12 w-12">...</Avatar>
<Avatar className="h-16 w-16">...</Avatar>`}
      >
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>XL</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Avatar Group"
        description="Stacked avatars for showing multiple users"
        code={`<div className="flex -space-x-4">
  <Avatar className="border-2 border-background">...</Avatar>
  <Avatar className="border-2 border-background">...</Avatar>
</div>`}
      >
        <div className="flex -space-x-4">
          {users.map((user, i) => (
            <Avatar key={i} className="border-2 border-background">
              {user.image ? (
                <AvatarImage src={user.image} alt={user.name} />
              ) : null}
              <AvatarFallback className="gradient-primary text-white">
                {user.initials}
              </AvatarFallback>
            </Avatar>
          ))}
          <Avatar className="border-2 border-background">
            <AvatarFallback className="bg-muted text-muted-foreground">+3</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Status Indicator"
        description="Avatar with online/offline status"
        code={`<div className="relative">
  <Avatar>...</Avatar>
  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
</div>`}
      >
        <div className="flex gap-4">
          <div className="relative">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
          </div>
          <div className="relative">
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 border-2 border-background" />
          </div>
          <div className="relative">
            <Avatar>
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-gray-400 border-2 border-background" />
          </div>
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
