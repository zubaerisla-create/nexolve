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
import { caseStudySummaries } from "@/data/case-studies";

export default function AdminCaseStudiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Case Studies</h1>
          <p className="text-neutral-500 dark:text-neutral-400">
            Manage your client success stories.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/case-studies/new">
            <Plus className="mr-2 h-4 w-4" /> Add Case Study
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
              <TableHead>Industry</TableHead>
              <TableHead>Published Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {caseStudySummaries.map((caseStudy) => (
              <TableRow key={caseStudy.id} className="dark:border-neutral-800 dark:hover:bg-neutral-900/50">
                <TableCell>
                  <div className="h-10 w-16 overflow-hidden rounded-md border dark:border-neutral-800 bg-neutral-100">
                    <img 
                      src={caseStudy.coverImage} 
                      alt={caseStudy.coverAlt} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{caseStudy.title}</TableCell>
                <TableCell>{caseStudy.category}</TableCell>
                <TableCell>{caseStudy.industry}</TableCell>
                <TableCell>
                  {new Date(caseStudy.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  })}
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
                        <Link href={`/case-studies/${caseStudy.slug}`} target="_blank">
                          View live
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/case-studies/${caseStudy.slug}`}>
                          Edit case study
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
