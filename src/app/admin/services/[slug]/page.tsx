import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Upload, Save, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { dynamicServicesData } from "@/data/dynamic-services-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = dynamicServicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/admin/services">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Edit Service</h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Update existing service offering details.
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
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>
                The main title and description for this service.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hero-title">Service Title</Label>
                <Input id="hero-title" defaultValue={service.heroTitle} className="text-lg font-medium" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input id="slug" defaultValue={slug} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-description">Hero Description</Label>
                <Textarea 
                  id="hero-description" 
                  defaultValue={service.heroDescription} 
                  className="h-24"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Process Section</CardTitle>
              <CardDescription>
                Details about how you deliver this service.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="process-title">Process Title</Label>
                <Input id="process-title" defaultValue={service.processTitle} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="process-desc">Process Description</Label>
                <Textarea 
                  id="process-desc" 
                  defaultValue={service.processDescription} 
                  className="h-20"
                />
              </div>
              
              <div className="pt-4 border-t dark:border-neutral-800">
                <div className="flex items-center justify-between mb-4">
                  <Label>Workflow Steps</Label>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-3 w-3" /> Add Step
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {service.steps.map((step) => (
                    <div key={step.id} className="p-4 border rounded-md dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-xs">Eyebrow (e.g. Discovery)</Label>
                          <Input defaultValue={step.eyebrow} />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs">Step Title</Label>
                          <Input defaultValue={step.title} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Description</Label>
                        <Textarea defaultValue={step.description} className="h-16 text-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
              <CardDescription>
                Tools and frameworks used for this service.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tech-title">Tech Title</Label>
                <Input id="tech-title" defaultValue={service.techTitle} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tech-desc">Tech Description</Label>
                <Textarea id="tech-desc" defaultValue={service.techDescription} className="h-16" />
              </div>
              
              <div className="pt-4 border-t dark:border-neutral-800">
                <div className="flex items-center justify-between mb-4">
                  <Label>Tech Items</Label>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-3 w-3" /> Add Item
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {service.techItems.map((item) => (
                    <div key={item.id} className="p-4 border rounded-md dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 space-y-4">
                      <div className="space-y-2">
                        <Label className="text-xs">Tool/Stack Name</Label>
                        <Input defaultValue={item.name} />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Description</Label>
                        <Input defaultValue={item.description} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hero Image</CardTitle>
              <CardDescription>Main image for the service page.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                <div className="flex flex-col items-center gap-4">
                  <img src={service.heroImage} alt="Cover" className="h-32 object-cover rounded-md w-full" />
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Change Image</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="active" className="cursor-pointer">Active Service</Label>
                <div className="h-5 w-9 rounded-full bg-neutral-900 dark:bg-neutral-100 relative cursor-pointer">
                  <div className="h-4 w-4 rounded-full bg-white dark:bg-neutral-900 absolute right-0.5 top-0.5" />
                </div>
              </div>
              <p className="text-xs text-neutral-500">
                If inactive, this service will be hidden from the main site navigation and landing pages.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
