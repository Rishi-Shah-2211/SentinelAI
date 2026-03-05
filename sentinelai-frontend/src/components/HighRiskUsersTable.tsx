interface Props{
  users:any[]
}

export default function HighRiskUsersTable({users}:Props){
  return(
    <div className="bg-panel p-6 rounded-xl border border-gray-800">

      <h2 className="text-lg mb-4">High Risk Users</h2>

      <table className="w-full text-left">
        <thead className="text-gray-400">
          <tr>
            <th>User</th>
            <th>Risk Score</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u,i)=>(
            <tr key={i} className="border-t border-gray-800">
              <td className="py-2">{u.userId}</td>
              <td className="text-red-400">{u.riskScore}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}