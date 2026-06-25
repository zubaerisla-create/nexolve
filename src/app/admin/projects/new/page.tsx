import Link from "next/link";
import { ArrowLeft, Upload, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewProjectPage() {
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
            <h1 className="text-2xl font-bold tracking-tight">Create Project</h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Add a new portfolio project to your site.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Save Draft</Button>
          <Button>
            <Save className="mr-2 h-4 w-4" /> Publish
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
                <Input id="title" placeholder="e.g. Fintech Mobile App" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input id="slug" placeholder="e.g. fintech-mobile-app" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Short Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Brief overview of the project..." 
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
              <div className="border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg p-12 text-center hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors cursor-pointer">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-full">
                    <Upload className="h-6 w-6 text-neutral-500" />
                  </div>
                  <h3 className="font-semibold text-sm">Click to upload</h3>
                  <p className="text-xs text-neutral-500">
                    SVG, PNG, JPG or GIF (max. 5MB)
                  </p>
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
                <Input id="category" placeholder="e.g. Web Development" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input id="year" placeholder="e.g. 2024" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" placeholder="e.g. React, Next.js, Tailwind" />
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
                <Input id="metric-value" placeholder="e.g. 45%" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="metric-label">Label</Label>
                <Input id="metric-label" placeholder="e.g. Increase in conversion" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
