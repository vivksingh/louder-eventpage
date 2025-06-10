import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy login logic
    navigate("/admin/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white m-16 p-8 rounded shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        <div>
          <Label>Email</Label>
          <Input type="email" placeholder="admin@example.com" />
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </div>
        <Button className="w-full mt-4" onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
}
