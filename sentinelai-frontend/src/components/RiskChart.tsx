import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
  
  interface Props{
    data:any[]
  }
  
  export default function RiskChart({data}:Props){
    return(
      <div className="bg-panel p-6 rounded-xl border border-gray-800">
        <h2 className="text-lg mb-4">Risk Trend</h2>
  
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="date" stroke="#ccc"/>
            <YAxis stroke="#ccc"/>
            <Tooltip/>
            <Line type="monotone" dataKey="avgRisk" stroke="#00F5FF"/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }