import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function AdminAddAdmin() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    status: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You should validate passwords match here
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // TODO: Call your API to add admin here
    console.log("Submitting admin data:", formData);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1">
        <AdminTopbar />
        <div className="max-w-xl mx-auto px-6 py-10">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Add New Admin</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-xl p-8 space-y-6 border border-gray-300"
          >
            <div className="space-y-2">
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="border border-gray-400 focus:border-gray-600 focus:ring-0 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="admin@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-400 focus:border-gray-600 focus:ring-0 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="border border-gray-400 focus:border-gray-600 focus:ring-0 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="border border-gray-400 focus:border-gray-600 focus:ring-0 shadow-sm"
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-300">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={formData.status}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, status: checked })
                  }
                />
                <Label className="text-sm text-gray-700">
                  {formData.status ? "Active" : "Inactive"}
                </Label>
              </div>

              <Button
                type="submit"
                className="px-6 py-2 text-base bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Add Admin
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
