import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Site Settings</h1>
          <p className="text-neutral-500 dark:text-neutral-400">
            Manage your global site configuration and preferences.
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" /> Save All Changes
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>General Setup</CardTitle>
            <CardDescription>
              Basic information about your website.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="site-name">Site Name</Label>
              <Input id="site-name" defaultValue="Nexolve" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="site-description">Site Description (SEO)</Label>
              <Textarea 
                id="site-description" 
                defaultValue="A premium digital agency specializing in Web Development, UI/UX, and AI Integration." 
                className="h-20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="favicon">Favicon URL</Label>
              <Input id="favicon" defaultValue="/favicon.ico" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Public contact details displayed on the site.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contact-email">Primary Email</Label>
              <Input id="contact-email" defaultValue="hello@nexolve.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-phone">Phone Number</Label>
              <Input id="contact-phone" defaultValue="+1 (555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="office-address">Office Address</Label>
              <Textarea 
                id="office-address" 
                defaultValue="123 Innovation Drive, Tech District, NY 10001" 
                className="h-20"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Links</CardTitle>
            <CardDescription>
              URLs for your social media profiles.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="social-twitter">Twitter / X</Label>
              <Input id="social-twitter" defaultValue="https://twitter.com/nexolve" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="social-linkedin">LinkedIn</Label>
              <Input id="social-linkedin" defaultValue="https://linkedin.com/company/nexolve" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="social-github">GitHub</Label>
              <Input id="social-github" defaultValue="https://github.com/nexolve" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="social-instagram">Instagram</Label>
              <Input id="social-instagram" defaultValue="https://instagram.com/nexolve" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Admin Users</CardTitle>
            <CardDescription>
              Manage who has access to this dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b dark:border-neutral-800 pb-2">
                 <div className="flex flex-col">
                    <span className="font-medium text-sm">admin@nexolve.com</span>
                    <span className="text-xs text-neutral-500">Super Admin</span>
                 </div>
                 <Button variant="ghost" size="sm" className="text-neutral-500">Edit</Button>
              </div>
              <div className="flex items-center justify-between border-b dark:border-neutral-800 pb-2">
                 <div className="flex flex-col">
                    <span className="font-medium text-sm">editor@nexolve.com</span>
                    <span className="text-xs text-neutral-500">Content Editor</span>
                 </div>
                 <Button variant="ghost" size="sm" className="text-red-500">Remove</Button>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-2">Invite New User</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
