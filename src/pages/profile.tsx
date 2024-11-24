"use client"

import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Separator } from '@/components/ui/separator'
import { Trophy, Target, Clock, Calendar } from 'lucide-react'

export default function ProfilePage() {
  const { user, logout, updateProfile } = useAuth()
  const [username, setUsername] = useState(user?.username || '')
  const [email, setEmail] = useState(user?.email || '')
  const [bio, setBio] = useState(user?.bio || '')

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await updateProfile({ username, email, bio })
      console.log('Profile updated successfully')
    } catch (error) {
      console.error('Failed to update profile:', error)
    }
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-white text-2xl">Please log in to view your profile.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-lg text-white">
        <CardHeader>
          <CardTitle className="text-3xl">Profile</CardTitle>
          <CardDescription className="text-gray-300">Manage your account settings and view your chess statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpdateProfile}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white bg-opacity-20 text-white placeholder-gray-400"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white bg-opacity-20 text-white placeholder-gray-400"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="bio">Bio</Label>
                <Input
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="bg-white bg-opacity-20 text-white placeholder-gray-400"
                />
              </div>
            </div>
          </form>

          <Separator className="my-6" />

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Chess Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span>Rating: {user.chessStats.rating}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-green-400" />
                <span>Win Rate: {user.chessStats.winRate}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Avg. Game Time: {user.chessStats.averageGameTime} min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>Member Since: {new Date(user.chessStats.memberSince).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" onClick={logout} className="text-white hover:text-red-300">Logout</Button>
          <Button onClick={handleUpdateProfile} className="bg-blue-600 hover:bg-blue-700 text-white">Update Profile</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

