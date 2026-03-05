import Sidebar from "../components/layout/Sidebar"
import Topbar from "../components/layout/Topbar"

export default function Security() {

  return (

    <div className="flex text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <div className="p-8 space-y-6">

          <div className="bg-black border border-green-500/30 rounded-xl p-6">

            <h2 className="text-green-400 text-lg mb-2">
              System Security Status
            </h2>

            <p className="text-gray-400">
              SentinelAI monitoring engine running normally.
            </p>

          </div>

          <div className="bg-black border border-purple-500/30 rounded-xl p-6">

            <h2 className="text-purple-400 text-lg mb-2">
              ML Detection Engine
            </h2>

            <p className="text-gray-400">
              Isolation Forest anomaly detection active.
            </p>

          </div>

          <div className="bg-black border border-cyan-500/30 rounded-xl p-6">

            <h2 className="text-cyan-400 text-lg mb-2">
              Platform Status
            </h2>

            <p className="text-gray-400">
              All monitoring services operational.
            </p>

          </div>

        </div>

      </div>

    </div>

  )
}