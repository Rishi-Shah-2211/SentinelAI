import { motion } from "framer-motion";
import { Link } from "react-router-dom"

export default function AlertsTable({ alerts }: any) {

  return (

    <div className="
    bg-black
    border border-red-500/30
    rounded-xl
    p-6
    ">

      <h2 className="text-red-400 mb-4">
        Threat Alerts
      </h2>

      <table className="w-full text-sm">

        <thead className="text-gray-400">
          <tr>
            <th>User</th>
            <th>Risk</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {alerts.map((a: any, i: number) => (

            <motion.tr
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="border-t border-gray-700"
            >

<td>
  <Link
    to={`/alert/${i}`}
    className="text-red-400 hover:underline"
  >
    {a.userId}
  </Link>
</td>

              <td className="text-yellow-400">
                Investigation
              </td>

            </motion.tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}