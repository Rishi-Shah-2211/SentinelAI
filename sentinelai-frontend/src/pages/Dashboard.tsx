import { useEffect, useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

import StatCard from "../components/dashboard/StatCard";
import RiskChart from "../components/dashboard/RiskChart";
import AlertsTable from "../components/dashboard/AlertsTable";
import HighRiskUsers from "../components/dashboard/HighRiskUsers";
import RiskHeatmap from "../components/analytics/RiskHeatmap";
import ActivityStream from "../components/dashboard/ActivityStream";
import ThreatGauge from "../components/dashboard/ThreatGauge";
import AIInsights from "../components/dashboard/AIInsights";

import "../styles/gridBackground.css";

import {
  getOverview,
  getAlerts,
  getHighRiskUsers,
  getRiskTrends,
  getActivities
} from "../services/api";

export default function Dashboard() {

  const [overview, setOverview] = useState<any>({});
  const [alerts, setAlerts] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [trend, setTrend] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {

    getOverview().then(res => setOverview(res.data));
    getAlerts().then(res => setAlerts(res.data));
    getHighRiskUsers().then(res => setUsers(res.data));
    getRiskTrends().then(res => setTrend(res.data));
    getActivities().then(res => setActivities(res.data));

  }, []);

  return (

    <div className="flex text-white">

      <div className="cyber-grid"></div>
      <div className="cyber-glow"></div>

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <div className="p-8 space-y-8">

          {/* stats */}

          <div className="grid grid-cols-4 gap-6">

            <StatCard title="Users" value={overview.totalUsers || 0} />
            <StatCard title="Activities" value={overview.totalActivities || 0} />
            <StatCard title="Alerts" value={overview.totalAlerts || 0} />
            <StatCard title="Avg Risk" value={overview.avgRisk || 0} />

          </div>

          {/* analytics */}

          <RiskChart data={trend} />
          <RiskHeatmap users={users} />


          {/* investigation */}

          <div className="grid grid-cols-3 gap-6">

            <ThreatGauge risk={overview.avgRisk || 0} />
            <AIInsights alerts={alerts} />
            <ActivityStream activities={activities} />

          </div>

          {/* tables */}

          <div className="grid grid-cols-2 gap-6">

            <HighRiskUsers users={users} />
            <AlertsTable alerts={alerts} />

          </div>

          


        </div>

      </div>

    </div>
  );
}