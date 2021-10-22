import { useRouter } from 'next/dist/client/router'
import { Fragment, useState } from 'react'
import { toast } from 'react-toastify'
import NewsForm from '../components/news/NewsForm'

import { postNews } from '../helpers/api-utils'
const AdminPage = () => {
  const router = useRouter()
  const addNewsHandler = async (formData) => {
    const { result, error } = await postNews(formData)
    if (error) {
      toast.error(error)
      return
    }
    if (result.data.acknowledged) {
      toast.success('Data has been added')
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
