import { useState } from "react";
import { Button } from "@/components/ui/button"; // assuming you're using shadcn/ui

export default function SubscribeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "",
    email: "",
    number: "",
  });

  const API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(`${API_URL}/api/event/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type");

      if (response.ok) {
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log("Success:", data);
        } else {
          const text = await response.text();
          console.log("Success (non-JSON):", text);
        }

        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          countryCode: "",
          email: "",
          number: "",
        });
      } else {
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          console.error("Error submitting form:", errorData);
          setError(errorData.message || "Error submitting form.");
        } else {
          const text = await response.text();
          console.error("Error submitting form (non-JSON):", text);
          setError("Error submitting form.");
        }
      }
    } catch (err) {
      console.error("Network error submitting form:", err);
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center px-4 bg-gray-100 py-12">
      <div className="flex w-[66%] max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png" // replace with your actual image URL
            alt="Subscribe"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Subscribe Now</h2>
          <h3 className="text-2xl mb-6 text-black">Get Exclusive Discounts only for you!</h3>

          {/* Messages */}
          {success && (
            <p className="text-green-600 mb-4">
              Subscription successful! Thank you 🎉
            </p>
          )}

          {error && (
            <p className="text-red-600 mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-lg text-black"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-lg text-black"
                required
              />
            </div>

            <input
              type="text"
              name="countryCode"
              placeholder="Country Code (e.g. +91)"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
              required
            />

            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
              required
            />

            <Button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-900 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
