import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <a href="#main-content" className="skip-link">Saltar al contenido</a>
      <ScrollToHash />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacidad" element={<Legal kind="privacidad" />} />
            <Route path="/cookies" element={<Legal kind="cookies" />} />
            <Route path="/terminos" element={<Legal kind="terminos" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
