import NewsItem from './NewsItem'

const NewsList = (props) => {
  const { news } = props
  return (
    <div className="col-md-6 offset-md-3">
      {news.map((newItem) => (
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
