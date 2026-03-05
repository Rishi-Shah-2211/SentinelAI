import { useEffect, useState } from "react"
import Sidebar from "../components/layout/Sidebar"
import Topbar from "../components/layout/Topbar"
import AlertsList from "../components/alerts/AlertsList"

import { getAlerts } from "../services/api"

export default function Alerts() {

  const [alerts, setAlerts] = useState<any[]>([])

  useEffect(() => {

    getAlerts().then(res => setAlerts(res.data))

  }, [])

  return (

    <div className="flex text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <div className="p-8">

          <AlertsList alerts={alerts} />

        </div>

      </div>

    </div>

  )
}