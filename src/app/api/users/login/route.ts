import connecDB from '@/dbConfig/dbConfig'
import User from '@/model/userModel'
import bcryptjs from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

connecDB()

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()
    const usernameExist = await User.findOne({ email })
    if (!usernameExist) {
      return NextResponse.json(
        { error: 'Username does not exist' },
        { status: 400 }
      )
    }
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      usernameExist.password
    )

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { error: 'Password is incorrect' },
        { status: 400 }
      )
    }

    const token = jwt.sign(
      { email: usernameExist.email },
      process.env.TOKEN_SECRET!
    )

    return NextResponse.json({
      message: 'User created successfully',
      succes: true,
      accessToken: token,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
