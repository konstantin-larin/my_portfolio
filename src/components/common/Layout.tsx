import Footer from "./Footer.tsx";
import {Outlet} from "react-router-dom";
export default function Layout({}){
    return (
        <>
            <main>
                <Outlet/>
            </main>
            <Footer></Footer>
        </>
    )

}