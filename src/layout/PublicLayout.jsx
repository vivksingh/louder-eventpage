import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import SubscribePopup from "../components/subscribe-popup.jsx";


export default function PublicLayout(){
    return (
        <div className="min-h-screen">
            <Header />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
            <SubscribePopup />
        </div>
    );
};