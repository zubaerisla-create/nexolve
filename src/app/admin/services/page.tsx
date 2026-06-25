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
import { dynamicServicesData } from "@/data/dynamic-services-data";

export default function AdminServicesPage() {
  const services = Object.entries(dynamicServicesData).map(([slug, data]) => ({
    slug,
    ...data,
  }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Services</h1>
          <p className="text-neutral-500 dark:text-neutral-400">
            Manage your service offerings.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/services/new">
            <Plus className="mr-2 h-4 w-4" /> Add Service
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
              <TableHead className="hidden md:table-cell">Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.slug} className="dark:border-neutral-800 dark:hover:bg-neutral-900/50">
                <TableCell>
                  <div className="h-10 w-16 overflow-hidden rounded-md border dark:border-neutral-800 bg-neutral-100">
                    <img 
                      src={service.heroImage} 
                      alt={service.heroTitle} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{service.heroTitle}</TableCell>
                <TableCell className="hidden md:table-cell text-sm text-neutral-500 truncate max-w-xs">
                  {service.heroDescription}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-900">
                    Active
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
                        <Link href={`/services/${service.slug}`} target="_blank">
                          View live
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/services/${service.slug}`}>
                          Edit service
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600 dark:text-red-400">
                        Archive
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
