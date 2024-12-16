'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import withAuth from '@/components/withAuth'

function SignupPage() {
  const router = useRouter()
  const [user, setUser] = React.useState({
    username: '',
    email: '',
    password: '',
  })
  const [isValidForm, setIsValidForm] = React.useState(false)
  const [isFormLoading, setIsFormLoading] = React.useState(false)

  useEffect(() => {
    if (
      user.username?.length > 0 &&
      user.email?.length > 0 &&
      user.password?.length > 0
    ) {
      setIsValidForm(true)
    } else {
      setIsValidForm(false)
    }
  }, [user])

  const handleSignUp = async (e) => {
    setIsFormLoading(true)
    e.preventDefault()
    try {
      const response = await axios.post('/api/users/signup', user)
      console.log(response)
      setUser({
        username: '',
        email: '',
        password: '',
      })
    } catch (error) {
      console.error(error)
      setIsFormLoading(false)
      router.push('/login')
    } finally {
      setIsFormLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-6">Create Your Account</h1>
      <form
        className="flex flex-col items-center justify-center gap-6 w-full max-w-md bg-white text-black p-8 rounded-lg shadow-lg"
        onSubmit={handleSignUp}>
        <div className="w-full">
          <label htmlFor="username" className="block text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Enter your username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={!isValidForm}
          className={`w-full px-6 py-3 mt-4 font-semibold rounded-md focus:outline-none focus:ring-4 ${
            !isValidForm
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500 focus:ring-purple-300'
          }`}>
          {isFormLoading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <p className="text-sm mt-4">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-500 hover:underline">
          Log In
        </Link>
      </p>
    </div>
  )
}

export default SignupPage
