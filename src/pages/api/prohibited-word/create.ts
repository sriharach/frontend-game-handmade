import { env } from 'process'
import { ObjectId } from 'mongodb'
import ClientDB from '@/database/config'
import type { NextApiRequest, NextApiResponse } from 'next'

type PayloadBodyWord = Array<{
  _id: ObjectId
  word: string
  show: number
}>

const COLLECTION = env.NEXT_PUBLIC_COLLECTION as string

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const reqBody = req.body as PayloadBodyWord
  const clientDB = await ClientDB()
  const db = clientDB.collection(COLLECTION)

  const newDate = reqBody.map((e) => ({
    _id: new ObjectId(),
    word: e.word,
    show: true,
  }))

  db.insertMany(newDate)
  res.json({ success: 'OK' })
}
