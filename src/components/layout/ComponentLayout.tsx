import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ComponentSidebar } from "./ComponentSidebar";

export function ComponentLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 md:absolute">
        <ComponentSidebar className="md:fixed md:top-0 md:left-0 h-full scroll-y-auto" />
        <main className="flex-1 overflow-auto md:relative md:top-16 md:left-64">
          <div className="container max-w-5xl py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
