export default function AdminTopbar() {
  return (
    <div className="bg-gray-800 text-black p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Logout</button>
    </div>
  );
}
