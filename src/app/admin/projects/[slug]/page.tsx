import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Upload, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjectBySlug } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/admin/projects">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Edit Project</h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Update existing portfolio project details.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Discard Changes</Button>
          <Button>
            <Save className="mr-2 h-4 w-4" /> Save Changes
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
              <CardDescription>
                Basic details about the project.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title</Label>
                <Input id="title" defaultValue={project.title} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input id="slug" defaultValue={project.slug} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Short Description</Label>
                <Textarea 
                  id="description" 
                  defaultValue={project.description} 
                  className="h-24"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Media</CardTitle>
              <CardDescription>
                Upload cover images and gallery photos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                <div className="flex flex-col items-center gap-4">
                  <img src={project.coverImage} alt="Cover" className="h-32 object-cover rounded-md" />
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Change Cover Image</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Metadata</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" defaultValue={project.category} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input id="year" defaultValue={project.year} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" defaultValue={project.tags.join(", ")} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Metrics</CardTitle>
              <CardDescription>Key result highlight</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metric-value">Value</Label>
                <Input id="metric-value" defaultValue={project.metric.value} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="metric-label">Label</Label>
                <Input id="metric-label" defaultValue={project.metric.label} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
