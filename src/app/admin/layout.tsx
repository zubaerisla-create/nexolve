"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { 
  LayoutDashboard, 
  FolderGit2, 
  FileText, 
  Newspaper, 
  Blocks, 
  Settings, 
  LogOut,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Projects", icon: FolderGit2 },
  { href: "/admin/case-studies", label: "Case Studies", icon: FileText },
  { href: "/admin/blogs", label: "Blogs", icon: Newspaper },
  { href: "/admin/services", label: "Services", icon: Blocks },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    setMounted(true);
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setDateStr(now.toLocaleDateString('en-US', options));
  }, []);

  return (
    <div className="flex min-h-screen bg-neutral-100 dark:bg-neutral-900">
      {/* Sidebar - Desktop */}
      <aside className="hidden w-64 flex-col border-r bg-white dark:bg-neutral-950 dark:border-neutral-800 md:flex">
        <div className="flex h-16 items-center border-b px-6 dark:border-neutral-800">
          <Link href="/admin" className="flex items-center gap-2 font-semibold">
            <div className="relative w-7 h-7 shrink-0">
              <Image
                src="/fav-icon.png"
                alt="Nexolve Logo"
                fill
                className="object-contain"
              />
            </div>
            <span>Nexolve Admin</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-4">
          <nav className="grid gap-1 px-4 text-sm font-medium">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    isActive
                      ? "bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-white"
                      : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="mt-auto p-4 border-t dark:border-neutral-800">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Header - Mobile & Desktop Top Bar */}
        <header className="flex h-16 items-center gap-4 border-b bg-white dark:bg-neutral-950 dark:border-neutral-800 px-6 lg:px-8">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 min-w-[200px] text-right">
              {mounted ? dateStr : ""}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
