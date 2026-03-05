interface Props {
    title: string
    value: number
  }
  
  export default function DashboardCard({title,value}:Props){
    return(
      <div className="bg-panel p-6 rounded-xl border border-gray-800">
        <p className="text-gray-400">{title}</p>
        <h2 className="text-3xl font-bold text-cyber mt-2">{value}</h2>
      </div>
    )
  }