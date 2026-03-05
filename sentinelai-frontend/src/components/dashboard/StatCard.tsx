import { motion } from "framer-motion";

interface Props {
  title: string
  value: number
}

export default function StatCard({ title, value }: Props) {

  return (

    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
      bg-black
      border border-cyan-500/30
      p-6
      rounded-xl
      backdrop-blur
      shadow-lg
      hover:shadow-cyan-500/40
      transition
      "
    >

      <div className="text-gray-400 text-sm tracking-wide">
        {title}
      </div>

      <div className="text-4xl text-cyan-400 font-bold mt-2">
        {value}
      </div>

    </motion.div>
  )
}