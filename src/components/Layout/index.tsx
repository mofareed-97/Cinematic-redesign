import { AppNavbar } from "./AppNavbar";
import AppSidebar from "./AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <AppSidebar />
      <div className="flex-1">
        <AppNavbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
