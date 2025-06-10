import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function AdminAddEvent() {
  const [status, setStatus] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1">
        <AdminTopbar />
        <div className="max-w-4xl mx-auto py-12 px-6">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Add New Event</h2>

          <div className="bg-white shadow rounded-xl p-8 space-y-6 border">
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Event Name</Label>
              <Input type="text" placeholder="Event Name" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Start Date</Label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">End Date</Label>
                <Input type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Event Description</Label>
              <Textarea placeholder="Event Description" rows={5} />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Image URL</Label>
              <Input type="url" placeholder="https://example.com/event.jpg" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Redirection URL</Label>
              <Input
                type="url"
                placeholder="https://your-event-landing-page.com"
              />
              <p className="text-xs text-gray-500">Must be a valid URL starting with http(s).</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Switch checked={status} onCheckedChange={setStatus} />
                <Label className="text-sm text-gray-700">
                  {status ? "Active" : "Inactive"}
                </Label>
              </div>
              <Button className="px-6 py-2 text-base">Add Event</Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
