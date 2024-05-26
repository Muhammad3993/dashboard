import { BrowserRouter, Route, Routes } from "react-router-dom"
// components
import Sidebar from "./components/sidebar/Sidebar"
// pages
import Home from "./pages/Home"
import Navbar from "./components/navbar/Navbar"
import { useState } from "react"

function App() {

  const [sidebar, setSidebar] = useState(true);
  const [sidebarForMedia, setSidebarForMedia] = useState(false);

  return (
    <div className="container">
      <BrowserRouter>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} sidebarForMedia={sidebarForMedia} setSidebarForMedia={setSidebarForMedia}/>
        <div className={!sidebar ? "routes routes_length" : "routes"}>
          <Navbar sidebarForMedia={sidebarForMedia} setSidebarForMedia={setSidebarForMedia} />
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
