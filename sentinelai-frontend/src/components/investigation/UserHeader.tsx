interface Props {
    userId: string
  }
  
  export default function UserHeader({ userId }: Props) {
  
    return (
  
      <div className="bg-black border border-cyan-500/30 rounded-xl p-6">
  
        <h1 className="text-2xl text-cyan-400 font-bold">
          User Investigation
        </h1>
  
        <div className="mt-2 text-gray-400">
          Investigating user: 
          <span className="text-cyan-400 ml-2 font-semibold">
            {userId}
          </span>
        </div>
  
      </div>
  
    )
  }