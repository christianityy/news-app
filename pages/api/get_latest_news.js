import { connectToDatabase, getCollection } from '../../helpers/db-utils'
const Handler = async (req, res) => {
  if (req.method === 'GET') {
    const client = await connectToDatabase()
    const newsCollection = await getCollection(client, 'news')
    const results = await newsCollection
      .find({
        startDate: {
          $gte: new Date().toDateString(),
        },
      })
      .toArray()
    client.close()
    res.status(200).json({ data: results })
  }
}

export default Handler
