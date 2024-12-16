'use client'
// components/withAuth.tsx

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Higher-Order Component (HOC)
function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const router = useRouter()

    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken')
      if (!accessToken) {
        router.replace('/login') // Redirect to login if not authenticated
      }
    }, [router])

    // While checking, you can return a loading spinner or null
    if (typeof window !== 'undefined' && !localStorage.getItem('accessToken')) {
      return null // Render nothing while redirecting
    }

    return <WrappedComponent {...props} />
  }

  AuthenticatedComponent.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`

  return AuthenticatedComponent
}

export default withAuth
