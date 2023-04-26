import ClientDB from '@/database/config'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const clientDB = await ClientDB()
  const db = clientDB.collection('words')
  db.updateMany({}, { $set: { show: true } })

  res.json({ success: 'OK' })
}
