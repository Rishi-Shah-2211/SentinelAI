import { useEffect, useState } from "react"

import Sidebar from "../components/layout/Sidebar"
import Topbar from "../components/layout/Topbar"

import { getHighRiskUsers } from "../services/api"

export default function Users() {

  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {

    getHighRiskUsers().then(res => {
      setUsers(res.data)
    })

  }, [])

  return (

    <div className="flex text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <div className="p-8">

          <div className="bg-black border border-cyan-500/30 rounded-xl p-6">

            <h1 className="text-xl text-cyan-400 mb-4">
              Monitored Users
            </h1>

            <table className="w-full text-sm">

              <thead className="text-gray-400">
                <tr>
                  <th>User</th>
                  <th>Risk Score</th>
                </tr>
              </thead>

              <tbody>

                {users.map((u, i) => (

                  <tr key={i} className="border-t border-gray-700">

                    <td>{u.userId}</td>

                    <td className="text-yellow-400">
                      {u.riskScore}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  )
}