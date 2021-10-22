import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import useSWR from 'swr'
import { getLatestNews, getNews } from '../../helpers/api-utils'
import NewsItem from './NewsItem'

const NewsList = (props) => {
  const [filter, setFilter] = useState(1)
  const { news } = props
  const [loadedNews, setNews] = useState(news)

  const filterChangeHandler = (event) => {
    setFilter(event.target.value)
  }

  useEffect(async () => {
    if (+filter === +'1') {
      const { result, error } = await getLatestNews()
      if (error) {
        toast.error(error)
      }
      setNews(result.data)
    } else if (+filter === +'2') {
      setNews(news)
    } else {
      return
    }
  }, [filter])

  return (
    <div className="col-md-6 offset-md-3">
      <div className="form-group">
        <select className="form-control" onChange={filterChangeHandler}>
          <option value="1">Today's News</option>
          <option value="2">All News</option>
        </select>
      </div>
      {loadedNews.map((newItem) => (
        <NewsItem
          key={newItem._id}
          image={newItem.image}
          heading={newItem.heading}
          datePosted={newItem.datePosted}
          startDate={newItem.startDate}
          postedBy={newItem.postedBy}
          content={newItem.content}
        />
      ))}
    </div>
  )
}

export default NewsList
