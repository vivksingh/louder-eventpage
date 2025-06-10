import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

export default function AdminEditSingleEvent() {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    // Example fetch — replace with actual API call:
    const fetchEventData = async () => {
      // Simulate API response
      const mockEvent = {
        id,
        name: "Event Example",
        start_date: "2025-06-20",
        end_date: "2025-06-21",
        description: "Example event description.",
        imgsrc: "https://example.com/event.jpg",
        redirection_url: "https://example.com",
        status: true,
      };
      setEventData(mockEvent);
      setStatus(mockEvent.status);
    };

    fetchEventData();
  }, [id]);

  const handleSave = () => {
    // Send updated eventData to backend (PUT or PATCH request)
    console.log("Saving event:", { ...eventData, status });
  };

  if (!eventData) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1">
        <AdminTopbar />
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Edit Event id : {id}</h2>

          <div className="bg-white shadow rounded-xl py-4 p-8 space-y-6 border border-gray-300">
            <div className="space-y-2">
              <Label>Event Name</Label>
              <Input
                type="text"
                value={eventData.name}
                onChange={(e) =>
                  setEventData({ ...eventData, name: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input
                  type="date"
                  value={eventData.start_date}
                  onChange={(e) =>
                    setEventData({ ...eventData, start_date: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input
                  type="date"
                  value={eventData.end_date}
                  onChange={(e) =>
                    setEventData({ ...eventData, end_date: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Event Description</Label>
              <Textarea
                rows={5}
                value={eventData.description}
                onChange={(e) =>
                  setEventData({ ...eventData, description: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Image URL</Label>
              <Input
                type="url"
                value={eventData.imgsrc}
                onChange={(e) =>
                  setEventData({ ...eventData, imgsrc: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Redirection URL</Label>
              <Input
                type="url"
                value={eventData.redirection_url}
                onChange={(e) =>
                  setEventData({ ...eventData, redirection_url: e.target.value })
                }
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-300">
              <div className="flex items-center space-x-2">
                <Switch checked={status} onCheckedChange={setStatus} />
                <Label className="text-sm text-gray-700">
                  {status ? "Active" : "Inactive"}
                </Label>
              </div>
              <Button
                className="px-6 py-2"
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
