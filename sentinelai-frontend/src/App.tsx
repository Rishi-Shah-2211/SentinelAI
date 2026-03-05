import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserInvestigation from "./pages/UserInvestigation"
import Users from "./pages/Users"
import AlertInvestigation from "./pages/AlertInvestigation"
import Security from "./pages/Security"
import Dashboard from "./pages/Dashboard"
import Alerts from "./pages/Alerts"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/user/:userId" element={<UserInvestigation />} />
        <Route path="/users" element={<Users />} />
        <Route path="/security" element={<Security />} />
        <Route path="/alert/:id" element={<AlertInvestigation />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App