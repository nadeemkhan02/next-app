import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI!)
    const connection = conn.connection
    connection.on('connected', () => {
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    })
    connection.on('error', (err) => {
      console.error(`MongoDB Connection Error: ${err}`)
    })
  } catch (err) {
    console.error(`MongoDB Connection Error: ${err}`)
  }
}

export default connectDB
