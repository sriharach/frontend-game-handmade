import { MongoClient } from 'mongodb'

const PASSWORD = process.env.NEXT_PUBLIC_DB_MONGOATLAS_PASSWORD as string
const url = `mongodb+srv://user-sriharach:${PASSWORD}@cluster0.re7aemm.mongodb.net/?retryWrites=true&w=majority`

export const client = new MongoClient(url)

const ClientDB = async () => {
  await client.connect()
  // console.log('🚀 Connected successfully to server')

  return client.db('enjoy_system')
}

export default ClientDB
