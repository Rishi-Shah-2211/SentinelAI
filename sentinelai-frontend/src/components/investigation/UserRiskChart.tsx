import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
  
  export default function UserRiskChart({ data }: any) {
  
    return (
  
      <div className="bg-black border border-purple-500/30 rounded-xl p-6">
  
        <h2 className="text-purple-400 mb-4">
          Risk Evolution
        </h2>
  
        <ResponsiveContainer width="100%" height={250}>
  
          <LineChart data={data}>
  
            <XAxis dataKey="date" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
  
            <Line
              type="monotone"
              dataKey="risk"
              stroke="#ff0077"
              strokeWidth={3}
              dot={false}
            />
  
          </LineChart>
  
        </ResponsiveContainer>
  
      </div>
  
    )
  }