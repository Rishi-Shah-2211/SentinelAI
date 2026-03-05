export default function ActivityTimeline({ activities }: any) {

    return (
  
      <div className="bg-black border border-green-500/30 rounded-xl p-6">
  
        <h2 className="text-green-400 mb-4">
          Activity Timeline
        </h2>
  
        <div className="space-y-3 max-h-80 overflow-y-auto">
  
          {activities.map((a: any, i: number) => (
  
            <div
              key={i}
              className="border-l-2 border-green-500 pl-4 pb-3"
            >
  
              <div className="text-sm text-cyan-400">
                {a.action}
              </div>
  
              <div className="text-xs text-gray-500">
                {new Date(a.timestamp).toLocaleString()}
              </div>
  
            </div>
  
          ))}
  
        </div>
  
      </div>
  
    )
  }