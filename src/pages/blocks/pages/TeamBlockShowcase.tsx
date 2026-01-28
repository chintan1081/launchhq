import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Twitter, Linkedin, Github } from "lucide-react";

function TeamSection1() {
  const team = [
    { name: "Alex Rivera", role: "CEO & Founder", initials: "AR" },
    { name: "Jordan Kim", role: "CTO", initials: "JK" },
    { name: "Sam Chen", role: "Head of Design", initials: "SC" },
    { name: "Taylor Morgan", role: "Lead Engineer", initials: "TM" },
  ];

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet our team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The talented people behind our success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <Avatar className="h-32 w-32 mx-auto mb-4">
                <AvatarFallback className="text-2xl bg-muted">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>
              <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection2() {
  const team = [
    { name: "Alex Rivera", role: "CEO & Founder", bio: "10+ years in tech leadership", initials: "AR" },
    { name: "Jordan Kim", role: "CTO", bio: "Former Google engineer", initials: "JK" },
    { name: "Sam Chen", role: "Head of Design", bio: "Award-winning designer", initials: "SC" },
  ];

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
          <p className="text-lg text-muted-foreground">
            Meet the people driving our vision forward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="p-6 rounded-xl border border-border/50 bg-card">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarFallback className="text-xl bg-muted">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-primary text-sm mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const teamFiles1: BlockFile[] = [
  {
    name: "team-grid.tsx",
    path: "components/blocks/team-grid.tsx",
    content: `import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Twitter, Linkedin, Github } from "lucide-react";

const team = [
  { name: "Alex Rivera", role: "CEO & Founder", initials: "AR" },
  { name: "Jordan Kim", role: "CTO", initials: "JK" },
  { name: "Sam Chen", role: "Head of Design", initials: "SC" },
  { name: "Taylor Morgan", role: "Lead Engineer", initials: "TM" },
];

export function TeamGrid() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet our team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The talented people behind our success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <Avatar className="h-32 w-32 mx-auto mb-4">
                <AvatarFallback className="text-2xl bg-muted">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>
              <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  },
];

const teamFiles2: BlockFile[] = [
  {
    name: "team-cards.tsx",
    path: "components/blocks/team-cards.tsx",
    content: `import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const team = [
  { name: "Alex Rivera", role: "CEO & Founder", bio: "10+ years in tech leadership", initials: "AR" },
  { name: "Jordan Kim", role: "CTO", bio: "Former Google engineer", initials: "JK" },
  { name: "Sam Chen", role: "Head of Design", bio: "Award-winning designer", initials: "SC" },
];

export function TeamCards() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
          <p className="text-lg text-muted-foreground">
            Meet the people driving our vision forward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="p-6 rounded-xl border border-border/50 bg-card">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarFallback className="text-xl bg-muted">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-primary text-sm mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function TeamBlockShowcase() {
  return (
    <BlockPage
      title="Team Section"
      description="Team member showcase sections."
    >
      <BlockPreview
        title="Team 01 - Grid"
        description="Team members in a centered grid"
        files={teamFiles1}
        installCommand="npx shadcn add team-01"
      >
        <TeamSection1 />
      </BlockPreview>

      <BlockPreview
        title="Team 02 - Cards"
        description="Leadership team with cards"
        files={teamFiles2}
        installCommand="npx shadcn add team-02"
      >
        <TeamSection2 />
      </BlockPreview>
    </BlockPage>
  );
}
