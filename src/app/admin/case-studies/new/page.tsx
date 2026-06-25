import Link from "next/link";
import { ArrowLeft, Upload, Save, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewCaseStudyPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/admin/case-studies">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Create Case Study</h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Add a new client success story.
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
                Basic details about the case study.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="e.g. Scaling a B2B SaaS Platform" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input id="slug" placeholder="e.g. scaling-b2b-saas" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt / Short Description</Label>
                <Textarea 
                  id="excerpt" 
                  placeholder="Brief summary for cards and lists..." 
                  className="h-24"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Builder</CardTitle>
              <CardDescription>
                Write the full case study sections.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="intro">Introduction</Label>
                <Textarea 
                  id="intro" 
                  placeholder="Introductory paragraph..." 
                  className="h-32"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="challenge">The Challenge</Label>
                <Textarea 
                  id="challenge" 
                  placeholder="Describe the client's problem..." 
                  className="h-32"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="solution">Our Solution</Label>
                <Textarea 
                  id="solution" 
                  placeholder="Describe how you solved it..." 
                  className="h-32"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="outcome">The Outcome</Label>
                <Textarea 
                  id="outcome" 
                  placeholder="Describe the results..." 
                  className="h-32"
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
                <Label htmlFor="client">Client Name</Label>
                <Input id="client" placeholder="e.g. VertexFlow" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" placeholder="e.g. Development" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input id="industry" placeholder="e.g. SaaS" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Project Duration</Label>
                <Input id="duration" placeholder="e.g. 10 Weeks" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Stat</CardTitle>
              <CardDescription>Primary metric to highlight</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="stat-value">Value</Label>
                <Input id="stat-value" placeholder="e.g. +42%" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stat-label">Label</Label>
                <Input id="stat-label" placeholder="e.g. Qualified Leads" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="seo-title">Meta Title</Label>
                <Input id="seo-title" placeholder="SEO optimized title..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="seo-desc">Meta Description</Label>
                <Textarea id="seo-desc" placeholder="SEO optimized description..." className="h-20" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
