interface Props{
    alerts:any[]
  }
  
  export default function AlertsTable({alerts}:Props){
    return(
      <div className="bg-panel p-6 rounded-xl border border-gray-800">
  
        <h2 className="text-lg mb-4">Security Alerts</h2>
  
        <table className="w-full text-left">
  
          <thead className="text-gray-400">
            <tr>
              <th>User</th>
              <th>Risk</th>
              <th>Time</th>
            </tr>
          </thead>
  
          <tbody>
            {alerts.map((a,i)=>(
              <tr key={i} className="border-t border-gray-800">
                <td>{a.userId}</td>
                <td className="text-red-400">{a.riskScore}</td>
                <td>{a.timestamp}</td>
              </tr>
            ))}
          </tbody>
  
        </table>
  
      </div>
    )
  }