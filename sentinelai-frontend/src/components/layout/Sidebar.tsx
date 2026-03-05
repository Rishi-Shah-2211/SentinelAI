import { Shield, AlertTriangle, Users, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Item = ({ icon: Icon, label, to }: any) => {

  const location = useLocation();
  const active = location.pathname === to;

  return (

    <Link to={to}>

      <motion.div
        whileHover={{ x: 6 }}
        className={`
        flex
        items-center
        gap-3
        p-2
        rounded
        transition
        cursor-pointer
        ${active ? "text-cyan-400 bg-cyan-500/10" : "text-gray-300 hover:text-cyan-400"}
        `}
      >

        <Icon size={18} />
        {label}

      </motion.div>

    </Link>

  );
};

export default function Sidebar() {

  return (

    <div
      className="
      w-64
      h-screen
      bg-black
      border-r border-cyan-500/20
      text-white
      flex
      flex-col
      "
    >

      {/* Logo */}

      <div
        className="
        p-6
        text-cyan-400
        text-xl
        font-bold
        border-b border-cyan-500/20
        "
      >
        SentinelAI
      </div>

      {/* Navigation */}

      <nav className="flex-1 p-4 space-y-3">

        <Item icon={Activity} label="Dashboard" to="/" />

        <Item icon={AlertTriangle} label="Alerts" to="/alerts" />

        <Item icon={Users} label="Users" to="/users" />

        <Item icon={Shield} label="Security" to="/security" />

      </nav>

    </div>

  );
}