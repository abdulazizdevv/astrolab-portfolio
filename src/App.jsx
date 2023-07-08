import AOS from "aos";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Vacancies } from "./pages/Vacancies.jsx";
import Contex from "./store/Context";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Contex>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vacancies" element={<Vacancies />} />
        </Routes>
      </Layout>
    </Contex>
  );
}

export default App;
