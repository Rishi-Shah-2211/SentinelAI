import SeverityBadge from "./SeverityBadge"

export default function AlertsList({ alerts }: any) {

  return (

    <div className="bg-black border border-red-500/30 rounded-xl p-6">

      <h2 className="text-red-400 mb-4 text-lg">
        Security Alerts
      </h2>

      <table className="w-full text-sm">

        <thead className="text-gray-400">
          <tr>
            <th>User</th>
            <th>Risk</th>
            <th>Severity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {alerts.map((a: any, i: number) => (

            <tr key={i} className="border-t border-gray-700">

              <td>{a.userId}</td>

              <td className="text-red-400">
                {a.riskScore}
              </td>

              <td>
                <SeverityBadge score={a.riskScore} />
              </td>

              <td className="text-yellow-400">
                Open
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}