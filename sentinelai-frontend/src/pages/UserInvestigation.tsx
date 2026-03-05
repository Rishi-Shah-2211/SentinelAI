import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Sidebar from "../components/layout/Sidebar"
import Topbar from "../components/layout/Topbar"

import UserHeader from "../components/investigation/UserHeader"
import ActivityTimeline from "../components/investigation/ActivityTimeline"
import UserRiskChart from "../components/investigation/UserRiskChart"

import { getActivities, getRiskTrends } from "../services/api"

export default function UserInvestigation() {

  const { userId } = useParams()

  const [activities, setActivities] = useState<any[]>([])
  const [riskData, setRiskData] = useState<any[]>([])

  useEffect(() => {

    getActivities().then(res => {

      const filtered = res.data.filter(
        (a: any) => a.userId === userId
      )

      setActivities(filtered)

    })

    getRiskTrends().then(res => setRiskData(res.data))

  }, [userId])

  return (

    <div className="flex text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <div className="p-8 space-y-6">

          <UserHeader userId={userId || ""} />

          <UserRiskChart data={riskData} />

          <ActivityTimeline activities={activities} />

        </div>

      </div>

    </div>

  )
}