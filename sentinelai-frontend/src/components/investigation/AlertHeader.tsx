interface Props {
    alert: any
  }
  
  export default function AlertHeader({ alert }: Props) {
  
    if (!alert) return null
  
    return (
  
      <div className="bg-black border border-red-500/30 rounded-xl p-6">
  
        <h1 className="text-xl text-red-400 font-bold">
          Threat Investigation
        </h1>
  
        <div className="mt-3 space-y-1 text-sm">
  
          <div>
            User:
            <span className="text-cyan-400 ml-2">
              {alert.userId}
            </span>
          </div>
  
          <div>
            Risk Score:
            <span className="text-red-400 ml-2">
              {alert.riskScore}
            </span>
          </div>
  
        </div>
  
      </div>
  
    )
  }