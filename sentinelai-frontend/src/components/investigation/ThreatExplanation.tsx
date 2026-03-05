export default function ThreatExplanation({ alert }: any) {

    if (!alert) return null
  
    return (
  
      <div className="bg-black border border-blue-500/30 rounded-xl p-6">
  
        <h2 className="text-blue-400 mb-3">
          AI Threat Explanation
        </h2>
  
        <div className="text-sm text-gray-300 space-y-2">
  
          <p>
            The anomaly detection model flagged this user because their
            activity deviates significantly from their historical baseline.
          </p>
  
          <p>
            Risk score <span className="text-red-400">{alert.riskScore}</span>
            indicates abnormal behavior patterns.
          </p>
  
          <p className="text-gray-400">
            Possible indicators include unusual login patterns, high
            activity volume, or suspicious access behavior.
          </p>
  
        </div>
  
      </div>
  
    )
  }