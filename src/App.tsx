import './styles/App.css';
import {LanguageProvider} from "./components/common/contexts/LanguageContext.tsx";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Fullstack from "./pages/Fullstack.tsx";
import Layout from "./components/common/Layout.tsx";


function App() {

    return (
        <LanguageProvider>
            <Router basename={'/my_portfolio/'}>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path={'/'} element={<Home/>}></Route>
                        <Route path={'/fullstack'} element={<Fullstack></Fullstack>}/>
                        <Route path={'*'} element={<Navigate to={'/'}></Navigate>}></Route>
                    </Route>
                </Routes>
            </Router>
        </LanguageProvider>
    )
}

export default App
