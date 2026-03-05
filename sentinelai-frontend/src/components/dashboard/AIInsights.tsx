export default function AIInsights({ alerts }: any) {

    if (!alerts.length) {
      return (
        <div className="bg-black border border-blue-500/30 rounded-xl p-6">
          <h2 className="text-blue-400 mb-4">
            AI Threat Analysis
          </h2>
  
          <div className="text-gray-400">
            No active anomalies detected.
          </div>
        </div>
      );
    }
  
    const top = alerts[0];
  
    return (
  
      <div className="bg-black border border-blue-500/30 rounded-xl p-6">
  
        <h2 className="text-blue-400 mb-4">
          AI Threat Analysis
        </h2>
  
        <div className="text-sm text-gray-300 space-y-2">
  
          <div>
            User <span className="text-cyan-400">{top.userId}</span>
            triggered anomaly detection.
          </div>
  
          <div>
            Risk score <span className="text-red-400">{top.riskScore}</span>
            exceeds normal behavior baseline.
          </div>
  
          <div className="text-gray-400">
            Recommended action: investigate unusual activity pattern.
          </div>
  
        </div>
  
      </div>
  
    )
  }