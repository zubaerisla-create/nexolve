import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Upload, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCaseStudyBySlug } from "@/data/case-studies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

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
            <h1 className="text-2xl font-bold tracking-tight">Edit Case Study</h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Update existing client success story.
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
                Basic details about the case study.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" defaultValue={caseStudy.title} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input id="slug" defaultValue={caseStudy.slug} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt / Short Description</Label>
                <Textarea 
                  id="excerpt" 
                  defaultValue={caseStudy.excerpt} 
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
                  defaultValue={caseStudy.intro} 
                  className="h-32"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="challenge">The Challenge</Label>
                <Textarea 
                  id="challenge" 
                  defaultValue={caseStudy.challenge} 
                  className="h-32"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="solution">Our Solution</Label>
                <Textarea 
                  id="solution" 
                  defaultValue={caseStudy.solution} 
                  className="h-32"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="outcome">The Outcome</Label>
                <Textarea 
                  id="outcome" 
                  defaultValue={caseStudy.outcome} 
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
              <div className="border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                <div className="flex flex-col items-center gap-4">
                  <img src={caseStudy.coverImage} alt="Cover" className="h-32 object-cover rounded-md" />
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
                <Label htmlFor="client">Client Name</Label>
                <Input id="client" defaultValue={caseStudy.client} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" defaultValue={caseStudy.category} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input id="industry" defaultValue={caseStudy.industry} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Project Duration</Label>
                <Input id="duration" defaultValue={caseStudy.duration} />
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
                <Input id="stat-value" defaultValue={caseStudy.stat?.value} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stat-label">Label</Label>
                <Input id="stat-label" defaultValue={caseStudy.stat?.label} />
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
                <Input id="seo-title" defaultValue={caseStudy.seoTitle} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="seo-desc">Meta Description</Label>
                <Textarea id="seo-desc" defaultValue={caseStudy.seoDescription} className="h-20" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
