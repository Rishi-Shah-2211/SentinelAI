export default function Topbar() {
    return (
      <div className="h-16 bg-black border-b border-cyan-500/20 flex items-center justify-between px-6">
  
        <div className="text-gray-300">
          Security Operations Center
        </div>
  
        <div className="flex items-center gap-6">
  
          <div className="text-green-400 text-sm">
            System Status: Secure
          </div>
  
          <div className="w-8 h-8 bg-cyan-500 rounded-full"></div>
  
        </div>
  
      </div>
    );
  }