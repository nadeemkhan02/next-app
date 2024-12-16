import withAuth from '@/components/withAuth'

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-500 to-blue-600 text-white">
      <h1 className="text-4xl font-bold mb-6">Profile Page</h1>
      <p className="text-sm">This is the profile page.</p>
    </div>
  )
}

export default withAuth(ProfilePage)
