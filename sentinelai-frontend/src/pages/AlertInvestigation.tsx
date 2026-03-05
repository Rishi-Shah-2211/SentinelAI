import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Sidebar from "../components/layout/Sidebar"
import Topbar from "../components/layout/Topbar"

import AlertHeader from "../components/investigation/AlertHeader"
import ThreatExplanation from "../components/investigation/ThreatExplanation"
import InvestigationActions from "../components/investigation/InvestigationActions"

import { getAlerts } from "../services/api"

export default function AlertInvestigation() {

  const { id } = useParams()

  const [alert, setAlert] = useState<any>(null)

  useEffect(() => {

    getAlerts().then(res => {

      const found = res.data[id || 0]

      setAlert(found)

    })

  }, [id])

  return (

    <div className="flex text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <div className="p-8 space-y-6">

          <AlertHeader alert={alert} />

          <ThreatExplanation alert={alert} />

          <InvestigationActions />

        </div>

      </div>

    </div>

  )
}