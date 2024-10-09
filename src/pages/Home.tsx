// import Links from "../components/Links.tsx";
// import Settings from "../components/Settings.tsx";
// import Footer from "../components/Footer.tsx";
// import {Link} from "react-router-dom";
import {Navigate} from "react-router-dom";
export default function Home(){
    return (
        <>
            <Navigate to={'/fullstack'}/>
        </>
        // <>
        //     <div className={'dark:bg-black dark:text-white bg-white text-black text-center mt-10 px-3'}>
        //         <h1>Карты: </h1>
        //         <Link to={'/fullstack'}><div className={'mt-6 text-lg'}>Fullstack</div></Link>
        //     </div>
        //     <div className={'asides'}>
        //         <Links></Links>
        //         <Settings></Settings>
        //     </div>
        //     <Footer></Footer>
        // </>
    )
}
