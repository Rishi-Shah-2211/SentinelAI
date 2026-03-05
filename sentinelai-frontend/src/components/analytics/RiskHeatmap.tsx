interface UserRisk {
    userId: string
    riskScore: number
  }
  
  interface Props {
    users: UserRisk[]
  }
  
  export default function RiskHeatmap({ users }: Props) {
  
    const getColor = (score: number) => {
  
      if (score > 80) return "bg-red-600"
      if (score > 60) return "bg-orange-500"
      if (score > 30) return "bg-yellow-500"
      return "bg-green-500"
  
    }
  
    return (
  
      <div className="bg-black border border-pink-500/30 rounded-xl p-6">
  
        <h2 className="text-pink-400 mb-4">
          Threat Intelligence Heatmap
        </h2>
  
        <div className="grid grid-cols-6 gap-3">
  
          {users.map((u, i) => (
  
            <div
              key={i}
              className={`
              p-3
              rounded
              text-center
              text-xs
              font-semibold
              text-black
              ${getColor(u.riskScore)}
              `}
            >
  
              {u.userId}
  
            </div>
  
          ))}
  
        </div>
  
      </div>
  
    )
  }