interface Props {
    score: number
  }
  
  export default function SeverityBadge({ score }: Props) {
  
    let label = "LOW"
    let color = "bg-green-500"
  
    if (score > 30) {
      label = "MEDIUM"
      color = "bg-yellow-500"
    }
  
    if (score > 60) {
      label = "HIGH"
      color = "bg-orange-500"
    }
  
    if (score > 80) {
      label = "CRITICAL"
      color = "bg-red-600"
    }
  
    return (
  
      <span className={`px-2 py-1 rounded text-xs text-white ${color}`}>
        {label}
      </span>
  
    )
  }