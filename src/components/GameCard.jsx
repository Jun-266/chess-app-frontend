import { Link } from 'react-router-dom'

export default function GameCard({ mode, description, icon: Icon }) {
  return (
    <Link to="/profile" className="block">
      <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-green-500 p-3 rounded-lg">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{mode}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </Link>
  )
}