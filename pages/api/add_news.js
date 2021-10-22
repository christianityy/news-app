import { connectToDatabase, getCollection } from '../../helpers/db-utils'

const Handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const data = req.body
      console.log(data.content)
      const formData = {
        datePosted: data.datePosted,
        image: data.image,
        startDate: new Date(data.startDate),
        heading: data.heading,
        postedBy: new Date(data.postedBy).toDateString(),
        content: data.content,
      }
      const client = await connectToDatabase()
      const newsCollection = await getCollection(client, 'news')
      const result = await newsCollection.insertOne(formData)
      client.close()
      res.status(200).json({ data: result })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

export default Handler
