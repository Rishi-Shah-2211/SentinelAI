export default function ThreatGauge({ risk }: any) {

    let label = "LOW";
    let color = "text-green-400";
  
    if (risk > 30) {
      label = "MEDIUM";
      color = "text-yellow-400";
    }
  
    if (risk > 60) {
      label = "HIGH";
      color = "text-orange-400";
    }
  
    if (risk > 80) {
      label = "CRITICAL";
      color = "text-red-500";
    }
  
    return (
  
      <div className="bg-black border border-purple-500/30 rounded-xl p-6">
  
        <h2 className="text-purple-400 mb-4">
          Threat Severity
        </h2>
  
        <div className="text-center">
  
          <div className={`text-5xl font-bold ${color}`}>
            {label}
          </div>
  
          <div className="text-gray-400 mt-2">
            Risk Score: {risk}
          </div>
  
        </div>
  
      </div>
  
    );
  }