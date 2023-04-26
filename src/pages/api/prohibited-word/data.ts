import { env } from 'process'
import { ObjectId } from 'mongodb'
import ClientDB from '@/database/config'
import type { NextApiRequest, NextApiResponse } from 'next'

export type PayloadBodyWord = {
  _id: ObjectId
  word: string
  show: number
}

const COLLECTION = env.NEXT_PUBLIC_COLLECTION as string

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const clientDB = await ClientDB()
  const db = clientDB.collection(COLLECTION)

  const result = (await db.find().toArray()) as Array<PayloadBodyWord>

  if (result.length > 0) {
    res.json(result)
  } else {
    res.json([])
  }
}
