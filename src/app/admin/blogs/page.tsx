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
import { blogs } from "@/data/blogs";

export default function AdminBlogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
          <p className="text-neutral-500 dark:text-neutral-400">
            Manage your blog posts and articles.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/blogs/new">
            <Plus className="mr-2 h-4 w-4" /> Add Post
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
              <TableHead>Author</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id} className="dark:border-neutral-800 dark:hover:bg-neutral-900/50">
                <TableCell>
                  <div className="h-10 w-16 overflow-hidden rounded-md border dark:border-neutral-800 bg-neutral-100">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium max-w-[300px] truncate" title={blog.title}>
                  {blog.title}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="font-normal text-xs">
                    {blog.category}
                  </Badge>
                </TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell>{blog.date}</TableCell>
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
                        <Link href={`/blogs/${blog.slug}`} target="_blank">
                          View live
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/blogs/${blog.slug}`}>
                          Edit post
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
