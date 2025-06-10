import { Outlet } from "react-router-dom";
import Footer from "../components/footer";


export default function AdminLayout(){
    return (
        <div className="min-h-screen">
        {/* <AdminHeader /> */}
                <main className="min-h-screen">
                    <Outlet />
                </main>
            <Footer />

        </div>
    );
}