import { Link } from "react-router-dom";

interface User {
  userId: string;
  riskScore: number;
}

interface Props {
  users: User[];
}

export default function HighRiskUsers({ users }: Props) {

  return (

    <div className="bg-black border border-yellow-500/30 rounded-xl p-6">

      <h2 className="text-yellow-400 mb-4 text-lg">
        High Risk Users
      </h2>

      <table className="w-full text-sm">

        <thead className="text-gray-400">
          <tr>
            <th className="text-left pb-2">User</th>
            <th className="text-left pb-2">Risk Score</th>
          </tr>
        </thead>

        <tbody>

          {users.map((u, i) => (

            <tr
              key={i}
              className="border-t border-gray-700"
            >

              <td className="py-2">

                <Link
                  to={`/user/${u.userId}`}
                  className="text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  {u.userId}
                </Link>

              </td>

              <td className="text-yellow-400">
                {u.riskScore}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}