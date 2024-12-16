'use client'

import withAuth from '@/components/withAuth'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect } from 'react'

function LoginPage() {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  })
  const [isValidForm, setIsValidForm] = React.useState(false)
  const [isFormLoading, setIsFormLoading] = React.useState(false)

  useEffect(() => {
    if (user.email?.length > 0 && user.password?.length > 0) {
      setIsValidForm(true)
    } else {
      setIsValidForm(false)
    }
  }, [user])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsFormLoading(true)
    try {
      const response = await axios.post('/api/users/login', user)
      console.log(response?.data?.accessToken)
      localStorage.setItem('accessToken', response?.data?.accessToken)
      setUser({
        email: '',
        password: '',
      })
    } catch (error) {
      console.error(error)
      setIsFormLoading(false)
    } finally {
      setIsFormLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-500 to-blue-600 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
      <form
        className="flex flex-col items-center justify-center gap-6 w-full max-w-md bg-white text-black p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}>
        <div className="w-full">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="w-full">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="w-full flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              id="show-password"
              onChange={(e) => {
                const passwordField = document.getElementById('password')
                if (passwordField) {
                  passwordField.type = e.target.checked ? 'text' : 'password'
                }
              }}
              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="show-password" className="text-sm text-gray-600">
              Show Password
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isValidForm}
          className={`w-full px-6 py-3 mt-4 font-semibold rounded-md focus:outline-none focus:ring-4 ${
            !isValidForm
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-blue-600 hover:to-green-500 focus:ring-blue-300'
          }`}>
          {isFormLoading ? 'Loading...' : 'Log In'}
        </button>
      </form>
      <p className="text-sm mt-4">
        Don’t have an account?{' '}
        <Link href="/signup" className="text-green-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  )
}

export default LoginPage
