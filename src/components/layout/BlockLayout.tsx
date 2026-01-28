import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { BlockSidebar } from "./BlockSidebar";

export function BlockLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <BlockSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container max-w-6xl py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
