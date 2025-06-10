import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const events = [
    {
      id: 1,
      name: "Bollywood Blast Night",
      start_date: "2025-07-10",
      end_date: "2025-07-11",
      created_on: "2025-06-10",
      description: "An epic night of Bollywood music and dance.",
      imgsrc: "https://source.unsplash.com/random/300x200?party",
      redirection_url: "https://example.com/event/1",
      status: true,
    },
    {
      id: 2,
      name: "Summer Beats Festival",
      start_date: "2025-08-01",
      end_date: "2025-08-02",
      created_on: "2025-06-12",
      description: "Outdoor music festival with international DJs.",
      imgsrc: "https://source.unsplash.com/random/300x200?festival",
      redirection_url: "https://example.com/event/2",
      status: false,
    },
    {
      id: 3,
      name: "Retro Bollywood Disco",
      start_date: "2025-09-15",
      end_date: "2025-09-15",
      created_on: "2025-06-14",
      description: "Retro-themed Bollywood disco party.",
      imgsrc: "https://source.unsplash.com/random/300x200?disco",
      redirection_url: "https://example.com/event/3",
      status: true,
    },
  ];

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1">
        <AdminTopbar />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-6">Events Dashboard</h2>
          <div className="overflow-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[160px]">Event Name</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Created On</TableHead>
                  <TableHead className="min-w-[200px]">Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="font-medium">{event.name}</TableCell>
                    <TableCell>{event.start_date}</TableCell>
                    <TableCell>{event.end_date}</TableCell>
                    <TableCell>{event.created_on}</TableCell>
                    <TableCell>
                      {event.description.length > 60
                        ? event.description.slice(0, 60) + "..."
                        : event.description}
                    </TableCell>
                    <TableCell>
                      <Badge variant={event.status ? "default" : "destructive"}>
                        {event.status ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell className="space-x-2">
                      
                      <Link to={`/admin/edit-event/${event.id}`}>
                        <Button className="size-sm">
                            Edit
                        </Button>
                        </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
