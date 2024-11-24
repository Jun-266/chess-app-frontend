import { Users, Monitor, Clock } from 'lucide-react'
import GameCard from '../components/GameCard'

export default function Options() {
  const gameTypes = [
    {
      mode: "Play Online",
      description: "Play with players around the world ",
      icon: Users
    },
    {
      mode: "Profile",
      description: "See my profile",
      icon: Monitor
    },
    {
      mode: "Play Offline",
      description: "Create a game and invite a friend to play",
      icon: Clock
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Play Chess Online
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Join millions of players from around the world
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {gameTypes.map((game) => (
            <GameCard key={game.mode} {...game} />
          ))}
        </div>
      </div>
    </div>
  )
}

