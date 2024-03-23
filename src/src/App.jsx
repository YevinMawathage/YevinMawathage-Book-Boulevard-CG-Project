import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Shop from "./pages/Shop"
import Testimonials from "./pages/Testimonials"
import Profile from "./pages/Profile"
import Footer from "./Components/Footer"
import Cards from "./Components/Cards"
import Membership from "./pages/Membership"
import ExploreBooks from "./pages/ExploreBooks"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Cards" element={<Cards />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/ExploreBooks" element={<ExploreBooks />} />
        </Routes>
      </div>
      <Footer />
        
    </>
  )
}

export default App
