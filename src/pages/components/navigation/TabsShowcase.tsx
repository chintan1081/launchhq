import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TabsShowcase() {
  return (
    <ComponentPage
      title="Tabs"
      description="A set of layered sections of content—known as tab panels—that are displayed one at a time."
    >
      <ComponentPreview
        title="Default Tabs"
        description="Basic tabs with content panels"
        code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account content</TabsContent>
  <TabsContent value="password">Password content</TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Your account settings and preferences.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Update your password to keep your account secure.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ComponentPreview>

      <ComponentPreview
        title="Underline Tabs"
        description="Tabs with underline style indicator"
        code={`<TabsList className="bg-transparent border-b rounded-none">
  <TabsTrigger value="tab" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
    Tab
  </TabsTrigger>
</TabsList>`}
      >
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0">
            <TabsTrigger
              value="overview"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Reports
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <p className="text-muted-foreground">Overview content goes here.</p>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <p className="text-muted-foreground">Analytics content goes here.</p>
          </TabsContent>
          <TabsContent value="reports" className="mt-4">
            <p className="text-muted-foreground">Reports content goes here.</p>
          </TabsContent>
        </Tabs>
      </ComponentPreview>

      <ComponentPreview
        title="Pills Tabs"
        description="Tabs with pill-style buttons"
        code={`<TabsList className="bg-muted p-1 rounded-full">
  <TabsTrigger value="tab" className="rounded-full">Tab</TabsTrigger>
</TabsList>`}
      >
        <Tabs defaultValue="all" className="w-full max-w-md">
          <TabsList className="bg-muted p-1 rounded-full">
            <TabsTrigger value="all" className="rounded-full">All</TabsTrigger>
            <TabsTrigger value="active" className="rounded-full">Active</TabsTrigger>
            <TabsTrigger value="archived" className="rounded-full">Archived</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <p className="text-muted-foreground">Showing all items.</p>
          </TabsContent>
          <TabsContent value="active" className="mt-4">
            <p className="text-muted-foreground">Showing active items.</p>
          </TabsContent>
          <TabsContent value="archived" className="mt-4">
            <p className="text-muted-foreground">Showing archived items.</p>
          </TabsContent>
        </Tabs>
      </ComponentPreview>
    </ComponentPage>
  );
}
