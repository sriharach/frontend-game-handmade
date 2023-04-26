import { env } from 'process'
import ClientDB from '@/database/config'
import type { NextApiRequest, NextApiResponse } from 'next'

const COLLECTION = env.NEXT_PUBLIC_COLLECTION as string

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const clientDB = await ClientDB()
  const db = clientDB.collection(COLLECTION)

  const result = await db.deleteMany()
  res.json(result)
}
