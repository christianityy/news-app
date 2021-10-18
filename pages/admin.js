import { useRouter } from 'next/dist/client/router'
import { Fragment } from 'react'

import NewsForm from '../components/news/NewsForm'

import { postNews } from '../helpers/api-utils'
const AdminPage = () => {
  const router = useRouter()
  const addNewsHandler = async (formData) => {
    const result = await postNews(formData)
    if (result.data.acknowledged) {
      router.push('/')
    }
  }
  return (
    <Fragment>
      <NewsForm onAddNews={addNewsHandler} />
    </Fragment>
  )
}

export default AdminPage
