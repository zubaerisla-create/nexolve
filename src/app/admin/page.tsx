import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FolderGit2, FileText, Newspaper, Users } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Welcome to the Nexolve Admin Dashboard.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <FolderGit2 className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              +2 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Case Studies</CardTitle>
            <FileText className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              +1 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published Blogs</CardTitle>
            <Newspaper className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              +4 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
            <Users className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Constant
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Recent updates and changes across the site.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-9 w-9 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-neutral-500" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium leading-none">
                      Updated Case Study "Fintech Redesign"
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      2 hours ago by Admin
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>
              Manage common resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
               {/* Quick action buttons or links */}
               <Link href="/admin/projects/new" className="block p-3 bg-neutral-50 dark:bg-neutral-900 rounded-md border text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer transition-colors">
                  Create New Project
               </Link>
               <Link href="/admin/blogs/new" className="block p-3 bg-neutral-50 dark:bg-neutral-900 rounded-md border text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer transition-colors">
                  Write a Blog Post
               </Link>
               <Link href="/admin/settings" className="block p-3 bg-neutral-50 dark:bg-neutral-900 rounded-md border text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer transition-colors">
                  Edit Site Settings
               </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
