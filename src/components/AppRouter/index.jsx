import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Housing from "../../pages/Housing";
import Error from "../Error";

const AppRouter = () => {
    return (
        <Router
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
            <Layout>
                <Routes>
                    <Route path="/oc-p5-kasa/" element={<Home />} />
                    <Route path="/oc-p5-kasa/a-propos" element={<About />} />
                    <Route
                        path="/oc-p5-kasa/logement/:id"
                        element={<Housing />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;
