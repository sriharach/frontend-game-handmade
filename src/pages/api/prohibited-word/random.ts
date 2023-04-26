import { env } from 'process'
import { ObjectId } from 'mongodb'
import ClientDB from '@/database/config'
import type { NextApiRequest, NextApiResponse } from 'next'

type PayloadBodyWord = {
  _id: ObjectId
  word: string
  show: number
}

const COLLECTION = env.NEXT_PUBLIC_COLLECTION as string
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const clientDB = await ClientDB()
  const db = clientDB.collection(COLLECTION)

  const result = (await db.find().toArray()) as Array<PayloadBodyWord>

  if (result.length > 0) {
    // await delay(800)
    const yes = result.filter((f) => f.show)
    const _then = yes[Math.floor(Math.random() * yes.length)]
    if (!_then) {
      const err = new Error()
      err.message = 'หมดแล้ว reset เกม'
      res.status(404).json({ err })
    }
    const filter = { _id: new ObjectId(_then._id) }
    db.updateOne(filter, { $set: { show: false } })
      .then(() => {
        res.status(200).json({ ..._then, show: false })
      })
      .catch((err) => res.json(err))
  }
}
