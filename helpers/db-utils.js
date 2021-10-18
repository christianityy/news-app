import { MongoClient } from 'mongodb'
export async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.DATABASE_URL)
  return client
}

export async function getCollection(client, collectionString) {
  const db = client.db()
  const col = db.collection(collectionString)
  return col
}
