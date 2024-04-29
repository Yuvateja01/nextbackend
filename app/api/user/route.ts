import { NextRequest } from "next/server"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(){
    return Response.json ({email:"test@gmail.com",name:"testuser"})
}

export async function POST(req:NextRequest){
    const body = await req.json()
    console.log(body)
    const res = await prisma.user.create({data:{username:body.username,password:body.password}})
    console.log(res)
    return Response.json ({message : "user Created"})
}