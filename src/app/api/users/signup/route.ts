import connecDB from '@/dbConfig/dbConfig'
import User from '@/model/userModel'
import bcryptjs from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

connecDB()

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json()
    const isUsernameExist = await User.findOne({ email })
    if (isUsernameExist) {
      return NextResponse.json(
        { error: 'Username already exists' },
        { status: 400 }
      )
    }
    const salt = await bcryptjs.genSalt(10)
    const hashPassword = await bcryptjs.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashPassword,
    })

    const savedUser = await newUser.save()

    console.log(savedUser)

    return NextResponse.json({
      message: 'User created successfully',
      succes: true,
      savedUser,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
