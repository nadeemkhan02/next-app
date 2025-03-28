import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add a valid username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please add a valid email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
})

const User = mongoose.models.users || mongoose.model('users', userSchema)

export default User
