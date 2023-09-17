import { Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import KelasPage from "./pages/KelasPage"
import Testimonial from "./pages/Testimonial"
import FaqPage from "./pages/FaqPage"
import SyaratKetenPage from "./pages/SyaratKetenPage"
import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/kelas" Component={KelasPage}/>
      <Route path="/testimonial" Component={Testimonial}/>
      <Route path="/syaratketen" Component={SyaratKetenPage}/>
      <Route path="/faq" Component={FaqPage}/>
    </Routes>
    <FooterComponent/>
  </div>
}

export default App
