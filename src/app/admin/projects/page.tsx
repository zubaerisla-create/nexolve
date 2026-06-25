import Link from "next/link";
import { Plus, MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export default function AdminProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-neutral-500 dark:text-neutral-400">
            Manage your portfolio projects.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/projects/new">
            <Plus className="mr-2 h-4 w-4" /> Add Project
          </Link>
        </Button>
      </div>

      <div className="rounded-md border dark:border-neutral-800 bg-white dark:bg-neutral-950">
        <Table>
          <TableHeader>
            <TableRow className="dark:border-neutral-800 hover:bg-transparent">
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Title
                  <ArrowUpDown className="ml-2 h-4 w-4 text-neutral-400" />
                </div>
              </TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id} className="dark:border-neutral-800 dark:hover:bg-neutral-900/50">
                <TableCell>
                  <div className="h-10 w-16 overflow-hidden rounded-md border dark:border-neutral-800 bg-neutral-100">
                    <img 
                      src={project.coverImage} 
                      alt={project.coverAlt} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell>{project.category}</TableCell>
                <TableCell>{project.year}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-900">
                    Published
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <Link href={`/projects/${project.slug}`} target="_blank">
                          View live
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/projects/${project.slug}`}>
                          Edit project
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600 dark:text-red-400">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
