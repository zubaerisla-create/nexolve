import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Upload, Save, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blogs } from "@/data/blogs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditBlogPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Convert category strings to option values for the select element
  const getCategoryValue = (category: string) => {
    switch (category) {
      case "UI/UX Design": return "ui-ux";
      case "Web Development": return "web-dev";
      case "App Development": return "app-dev";
      case "Business Strategy": return "business";
      case "Digital Marketing": return "marketing";
      case "Generative AI": return "ai";
      case "AI Production": return "ai-prod";
      case "Edge Computing": return "edge";
      case "Photography": return "photo";
      default: return "";
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/admin/blogs">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Edit Blog Post</h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Update existing article.
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
              <CardTitle>Post Content</CardTitle>
              <CardDescription>
                Title and body of your blog post.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" defaultValue={blog.title} className="text-lg font-medium" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input id="slug" defaultValue={blog.slug} />
              </div>
              
              <div className="space-y-2 pt-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="content">Content Body</Label>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    <ImageIcon className="mr-2 h-3 w-3" /> Insert Image
                  </Button>
                </div>
                {/* Placeholder for a Rich Text Editor (like TipTap/Quill) */}
                <div className="border rounded-md border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center gap-1 border-b bg-neutral-50 dark:bg-neutral-900/50 p-2 overflow-x-auto">
                     <Button variant="ghost" size="icon" className="h-8 w-8 text-sm font-bold">B</Button>
                     <Button variant="ghost" size="icon" className="h-8 w-8 text-sm italic">I</Button>
                     <Button variant="ghost" size="icon" className="h-8 w-8 text-sm underline">U</Button>
                     <div className="w-px h-4 bg-neutral-300 mx-2" />
                     <Button variant="ghost" size="sm" className="h-8 text-sm">H1</Button>
                     <Button variant="ghost" size="sm" className="h-8 text-sm">H2</Button>
                     <Button variant="ghost" size="sm" className="h-8 text-sm">Quote</Button>
                  </div>
                  <Textarea 
                    id="content" 
                    defaultValue="This is mock content for the blog post since the data file only contains summaries!" 
                    className="min-h-[400px] border-0 focus-visible:ring-0 resize-y rounded-t-none"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="author">Author Name</Label>
                <Input id="author" defaultValue={blog.author} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select 
                  id="category" 
                  defaultValue={getCategoryValue(blog.category)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300"
                >
                   <option value="">Select a category...</option>
                   <option value="ui-ux">UI/UX Design</option>
                   <option value="web-dev">Web Development</option>
                   <option value="app-dev">App Development</option>
                   <option value="business">Business Strategy</option>
                   <option value="marketing">Digital Marketing</option>
                   <option value="ai">Generative AI</option>
                   <option value="ai-prod">AI Production</option>
                   <option value="edge">Edge Computing</option>
                   <option value="photo">Photography</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="publish-date">Publish Date</Label>
                <Input id="publish-date" type="text" defaultValue={blog.date} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cover Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                <div className="flex flex-col items-center gap-4">
                  <img src={blog.image} alt="Cover" className="h-32 object-cover rounded-md" />
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Change Cover Image</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>SEO Optimization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="seo-desc">Meta Description</Label>
                <Textarea id="seo-desc" defaultValue={blog.description || `Read about ${blog.title} by ${blog.author}`} className="h-24" />
                <p className="text-[10px] text-neutral-500 text-right">0 / 160 chars</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
