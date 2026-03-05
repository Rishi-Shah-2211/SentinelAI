import { motion } from "framer-motion";

export default function ActivityStream({ activities }: any) {

  return (

    <div className="bg-black border border-green-500/30 rounded-xl p-6">

      <h2 className="text-green-400 mb-4">
        Live Activity Stream
      </h2>

      <div className="space-y-2 max-h-72 overflow-y-auto">

        {activities.map((a: any, i: number) => (

          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.04 }}
            className="text-sm border-b border-gray-800 pb-2"
          >

            <span className="text-cyan-400">{a.userId}</span>

            <span className="text-gray-400 ml-2">
              {a.action}
            </span>

            <span className="text-gray-500 ml-3 text-xs">
              {new Date(a.timestamp).toLocaleTimeString()}
            </span>

          </motion.div>

        ))}

      </div>

    </div>

  )
}