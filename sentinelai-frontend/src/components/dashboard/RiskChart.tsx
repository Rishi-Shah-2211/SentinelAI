import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
  
  import { motion } from "framer-motion";
  
  export default function RiskChart({ data }: any) {
  
    return (
  
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="
        bg-black
        border border-cyan-500/20
        rounded-xl
        p-6
        "
      >
  
        <h2 className="text-cyan-400 mb-4">
          Risk Trend
        </h2>
  
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
  
            <XAxis dataKey="date" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
  
            <Line
              type="monotone"
              dataKey="risk"
              stroke="#00ffff"
              strokeWidth={3}
              dot={false}
            />
  
          </LineChart>
        </ResponsiveContainer>
  
      </motion.div>
    );
  }